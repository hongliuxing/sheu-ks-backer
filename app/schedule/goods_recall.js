"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const util = require('util');
// const StringDecoder = require('string_decoder').StringDecoder;
// const decoder = new StringDecoder('utf8');
const WechatUtils = require('../utils/wx/WechatUtils');
/**
 * 用于描述与活动相关的定时任务
 * 兜底方案一：每10分钟刷新活动数据
 */
exports.schedule = {
    interval: '30m',
    // cron: '*/20 * * * * *',
    immediate: true,
    type: 'worker',
};
exports.task = async (ctx) => {
    // await ctx.service.source.update();
    // ctx.app.lastUpdateBy = 'force';
    console.log('==========『 执行查询订单：');
    // 查询距离现在 30min 之前的, 状态为 0 的订单
    // 循环检查订单, 并执行关闭, 及归还库存
    
    let transaction = null;
    try {
        // 查询数据库中所有(待支付=0 的订单)
        const willpayorders = await ctx.model.query('CALL proc_filter_order_disabled();');
        console.log('============= 异常状态的订单数量: ', willpayorders.length);
        for (const order of willpayorders) {
            transaction = await ctx.model.transaction();
            // 查询订单状态
            const out_trade_no = order.id; // '4dd2c802132b4f9eb538adf96cb59946';
            const queryRes = await WechatUtils.queryOrderquery(out_trade_no);
            console.log('======================『 『 订单查询结果: ', queryRes);
            // && queryRes.result_code == 'FAIL' && queryRes.err_code == 'ORDERNOTEXIST'
            if(queryRes.return_code == 'SUCCESS' && queryRes.result_code == 'SUCCESS' && queryRes.trade_state == 'NOTPAY'){
                let out_result = 0;
                // 归还宿舍楼的库存
                const closeOrderRes = await ctx.model.query('CALL proc_sales_4_dormitory($$1,$$2,$$3,$$4);', {
                    // replacements: [out_trade_no, 0],
                    bind: [ out_trade_no, 0, 2, out_result ], transaction
                });
                console.log('【关闭订单后,修改库存】=> 还商品的执行结果['+out_result+']: ' + JSON.stringify(closeOrderRes));
                ctx.logger.info('【关闭订单后,修改库存】=> 还商品的执行结果['+out_result+']: ' + JSON.stringify(closeOrderRes));
                
                // 1.开始执行关闭订单, 
                const closeRes = await WechatUtils.orderClose(out_trade_no);
                console.log('【关闭订单结果】=>', closeRes);
                if(closeRes.return_code == 'SUCCESS' && closeRes.result_code == 'SUCCESS'){
                    console.log('【关闭订单后,修改库存】=> ' + JSON.stringify(closeRes));
                    ctx.logger.info('【关闭订单后,修改库存】=> ' + JSON.stringify(closeRes));

                    // 修改订单的数据库状态, 将成功关闭的(0 未支付)订单的状态修改为(-1 预支付失败)
                    const updateStrutsRes = await ctx.model.Orderstruts.update({
                        status: -1
                    }, {
                        where: {
                            status: 0,
                            out_trade_no,
                        }, 
                        transaction,
                    });

                    console.log('【还宿舍楼库存结果】=>', updateStrutsRes);
                    await transaction.commit();
                    // break;
                    // 2. 执行完毕之后, 修改订单状态(已关闭)并归还已占用的现有库存
                    // let out_result = 0;
                    // const closeOrderRes = await ctx.model.query('CALL proc_goods_repertory_change(?,?,?);', {
                    //     replacements: [out_trade_no, 0, out_result],
                    // });
                    // console.log('【关闭订单后,修改库存】=> 还商品的执行结果: ' + JSON.stringify(closeOrderRes));
                    // ctx.logger.info('【关闭订单后,修改库存】=> 还商品的执行结果: ' + JSON.stringify(closeOrderRes));
                }else{
                    await transaction.rollback();
                    return ctx.logger.error( new Error('【订单关闭错误】=> ' + JSON.stringify(closeRes)) );
                }
                
            }else if(queryRes.return_code == 'SUCCESS' && queryRes.result_code == 'FAIL' && queryRes.err_code == 'ORDERNOTEXIST'){
                // 其他状态的订单( 没有该类型 ) order not exist
                // 修改订单的数据库状态, 将成功关闭的(0 未支付)订单的状态修改为(-1 预支付失败)
                
                const updateStrutsRes = await ctx.model.Orderstruts.update({
                    status: -1
                }, {
                    where: {
                        status: 0,
                        out_trade_no,
                    }, 
                    transaction,
                });
                console.log('【订单在微信中不存在】=> 移除订单状态 从 0 -> 1 :', updateStrutsRes);
                await transaction.commit();
            }else{
                // 其他状态的订单( 没有该类型 )
                await transaction.rollback();
            }
        }
        // console.log('==========『 『 订单查询结果: ', queryResBuffer.data );
    } catch (error) {
        console.log('==========『 『 订单查询错误: ', error);
        if(null != transaction){
            await transaction.rollback();
        }
    }
    

};