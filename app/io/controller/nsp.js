/**
 * 用于与前端建立 socket 连接
 */
const Controller = require('egg').Controller;
let moment = require('moment');

class NspController extends Controller {
    constructor(ctx) {
        super(ctx);
        console.log('in NspController...');
    }

    async orderChange() {
        const { ctx, app } = this;
        const nsp = app.io.of('/io-listening');
        const message = ctx.args[0] || {};
        const socket = ctx.socket;
        const client = socket.id;

        try {
            const { target, payload, state, orderId, dormId } = message;
            console.log('前台说 :: ', message);
            if(state === 'info' && orderId){
                console.log('执行查询订单详情... ');
                this.queryOrderInfo(ctx, nsp, orderId);
            }else if(state === 'list'){
                this.queryOrderList(ctx, nsp);
            }else if(state === 'dorm'){
                this.queryDorms(ctx, nsp);
            }else if(state === 'dormDetails'){
                this.queryDormDetails(ctx, nsp, dormId);
            }
            // if (!target) return;
            // const msg = ctx.helper.parseIOMsg('orderChange', payload, { client, target });
            // console.log('msg', msg);
            // nsp.emit(target, msg);
        } catch (error) {
            app.logger.error(error);
        }
    }

    /**
     * 查询宿舍状态详情
     * @param {*} ctx 
     * @param {*} nsp 
     */
    async queryDormDetails(ctx, nsp, dormId){
        const dorms = await ctx.service.order.queryDormDetails(dormId);

        const res = {
            dorms
        };
        // console.log('======= 宿舍状态发送数据:', res);
        nsp.emit('onDormDetails', res);
    }

    /**
     * 查询宿舍状态详情
     * @param {*} ctx 
     * @param {*} nsp 
     */
    async queryDorms(ctx, nsp){
        const dorms = await ctx.service.order.queryDorms(2430);

        const res = {
            dorms
        };
        // console.log('======= 宿舍状态发送数据:', res);
        nsp.emit('onDormState', res);
    }

    /**
     * 查询订单详情
     * @param {*} ctx 
     * @param {*} nsp 
     */
    async queryOrderInfo(ctx, nsp, orderId){
        const orderInfo = await ctx.service.order.queryOrderInfo(orderId);
        orderInfo.created = moment(orderInfo.created).format('YYYY-MM-DD HH:mm:ss');
        orderInfo.prepay_time = orderInfo.prepay_time && moment(orderInfo.prepay_time).format('YYYY-MM-DD HH:mm:ss');
        orderInfo.pay_time = orderInfo.pay_time && moment(orderInfo.pay_time).format('YYYY-MM-DD HH:mm:ss');
        orderInfo.seller_receive_time = orderInfo.seller_receive_time && moment(orderInfo.seller_receive_time).format('YYYY-MM-DD HH:mm:ss');
        orderInfo.knight_receive_time = orderInfo.knight_receive_time && moment(orderInfo.knight_receive_time).format('YYYY-MM-DD HH:mm:ss');
        switch(orderInfo.status){
            case 0: orderInfo.statusText = '待支付'; break;
            case 1: orderInfo.statusText = '已支付'; break;
            case 2: orderInfo.statusText = '骑士已接单'; break;
            case 3: orderInfo.statusText = '发货派送中'; break;
            case 4: orderInfo.statusText = '已送达'; break;
            case 5: orderInfo.statusText = '已完结'; break;
            case 6: orderInfo.statusText = '可退款'; break;
            case -1: orderInfo.statusText = '预付款失败'; break;
            case -2: orderInfo.statusText = '客户取消订单'; break;
            case -3: orderInfo.statusText = '付款失败'; break;
            case -4: orderInfo.statusText = '申请订单退费'; break;
            case -5: orderInfo.statusText = '订单退费中'; break;
            case -6: orderInfo.statusText = '订单已退费'; break;
            case -7: orderInfo.statusText = '微信退款失败'; break;
            default: orderInfo.statusText = '异常状态'; break;
        }

        const res = {
            orderInfo
        };
        // console.log('======= 订单详情发送数据:', res);
        nsp.emit('onOrderInfo', res);
    }

    /**
     * 查询订单列表
     * @param {*} ctx 
     * @param {*} nsp 
     */
    async queryOrderList(ctx, nsp){
        // 查询三天内的订单
        const newOrders = await ctx.service.order.queryOrders(2430);
        // 对订单进行分类整理
        const preparOrders = []; // 准备中的订单(0待支付  1已支付)
        const runningOrders = []; // 进行中的订单(2商家已接单 3骑士派送中)
        /**
         * 4，骑士已送达(待评价)；5，(评论)已完结<被动>；6：可退款；
         * -1，预付款失败<被动>；-2，客户取消订单；-3，付款失败<被动>；
         * -4，用户申请订单退费；-5，订单退费中；-6，订单已退费<被动>，-7，微信退款失败
         */
        const otherOrders = [];
        newOrders.forEach( o => {
            o.created = moment(o.created).format('YYYY-MM-DD HH:mm:ss');
            // console.log('订单状态为: ', o.status, typeof o.status);
            switch(o.status){
                case 0: o.statusText = '待支付'; preparOrders.push(o);break;
                case 1: o.statusText = '已支付'; preparOrders.push(o);break;
                case 2: o.statusText = '骑士已接单'; runningOrders.push(o);break;
                case 3: o.statusText = '发货派送中'; runningOrders.push(o);break;
                case 4: o.statusText = '已送达'; otherOrders.push(o);break;
                case 5: o.statusText = '已完结'; otherOrders.push(o);break;
                case 6: o.statusText = '可退款'; otherOrders.push(o);break;
                case -1: o.statusText = '预付款失败'; otherOrders.push(o);break;
                case -2: o.statusText = '客户取消订单'; otherOrders.push(o);break;
                case -3: o.statusText = '付款失败'; otherOrders.push(o);break;
                case -4: o.statusText = '申请订单退费'; otherOrders.push(o);break;
                case -5: o.statusText = '订单退费中'; otherOrders.push(o);break;
                case -6: o.statusText = '订单已退费'; otherOrders.push(o);break;
                case -7: o.statusText = '微信退款失败'; otherOrders.push(o);break;
                default: o.statusText = '异常状态'; otherOrders.push(o);break;
            }
        });

        const now = (new Date()).getTime();
        // 为 预支付订单列表 设置报警界线
        preparOrders.forEach( (o) => {
            const diff = now - (new Date(o.created)).getTime();
            // console.log('警戒值: ', diff);
            if(diff > 120000){ // 超过 2 分钟报警
                o.warned = true;
            }
        });

        const res = {
            preparOrders, runningOrders, otherOrders
        };

        nsp.emit('serveRes', res);
    }
}

module.exports = NspController;