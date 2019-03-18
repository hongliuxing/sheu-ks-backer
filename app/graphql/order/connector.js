/** 
 * 模型 Order 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class OrderConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Order;
	}

	// 用于查询单个模型数据的方法
	order(id) {
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	orderAll(page,order) {
		const opts = this.generateQueryOptions({page,order});
		const where = {};
		return this.proxy.findAll({where, ...opts });
	}

	// 检查销售过的订单
	async checkSellOrders(goods_id){
		const {ctx} = this;
		const {Goods, Dormitory, Orderstruts, Ordergoodsrelation, Order} = ctx.model;

		try {
			const include = [{
				model: Dormitory,
				required: true,
			},{
				model: Orderstruts,
				required: true,
				as: 'orderstruts',
				where: {
					status: 4,
				}
			},{
				model: Ordergoodsrelation,
				required: true,
				attributes: ['goods_id', 'goods_count'],
				include: [{
					model: Goods,
					required: true,
					as: 'goods',
					where: {
						id: goods_id
					}
				}],
			}];
			// 查询符合条件(商品id)的所有(已完成 struts = 4)的订单
			const orders = await Order.findAll({
				include, order: [['created', 'DESC']]
			});

			return orders;
		} catch (error) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: error});
			console.error('【checkSellOrders ERROR】： ', msg);
			ctx.logger.error(msg);
			return null;
		}
	}

	// 新增模型的方法
	async addOrder(order) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,client_id,seller_id,knight_id,address,short_num,out_trade_no,device,type,spbill_create_ip
				,gift_fee,discount_fee,express_fee,total_fee,goods_detail,remark,created,school_id,realname
				,gender,mobile,school_area,detail,dorm_id,rush_activity_id} = order;
			id = uuidv1();
			console.log('【add order】 ： ', order);
			const orderInput = await this.proxy.create( _.omitBy({id,client_id,seller_id,knight_id,address,short_num
				,out_trade_no,device,type,spbill_create_ip,gift_fee,discount_fee,express_fee,total_fee,goods_detail
				,remark,created,school_id,realname,gender,mobile,school_area,detail,dorm_id,rush_activity_id}, _.isNil) );
			return orderInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add order】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateOrder(order) {
		const {ctx} = this;
		const {id,client_id,seller_id,knight_id,address,short_num,out_trade_no,device,type,spbill_create_ip,gift_fee
			,discount_fee,express_fee,total_fee,goods_detail,remark,created,school_id,realname,gender,mobile
			,school_area,detail,dorm_id,rush_activity_id} = order;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,client_id,seller_id,knight_id,address,short_num,out_trade_no
				,device,type,spbill_create_ip,gift_fee,discount_fee,express_fee,total_fee,goods_detail,remark,created
				,school_id,realname,gender,mobile,school_area,detail,dorm_id,rush_activity_id}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update order】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeOrder(id) {
		const {ctx} = this;
		let msg = null, result = -1;
		try{
			result = await this.proxy.destroy({where: {id}});
			const affected_rows_count = result;
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "删除成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "删除未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR delete order】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = OrderConnector;
