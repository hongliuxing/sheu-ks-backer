const util = require('util');
import * as httpUtil from './utils/base';
const WechatUtils = require('../../../app/utils/wx/WechatUtils');
// import {spread} from './utils/gql-util';
// import * as order from './graphql/order';
// interface OrderInfo{
//     goods_title: string;
// };

describe('test/app/controller/home.test.ts', () => {

    // const goods_id = '368c9740-45a3-11e9-9aa6-f57b522bc91b'; // 矿泉水

    // const goods_id = '0d9ba5b0-4297-11e9-829c-454947a492d1'; // 康师傅红烧

    const goods_id = 'ccb41a50-4246-11e9-9b32-47ad65578e70'; // 优乐美香芋味
    // const orders = order.checkSellOrders(order_id);

    it('should HTTP /findAll', async () => {
		const q1 = `query={
			checkSellOrders(goods_id: "${goods_id}"){
                id, detail, realname, mobile, mobile, total_fee, created,
                dormitory{
                    drom_name
                },
                orderstruts{
                    status  
                },
                ordergoodsrelations{
                    goods_count,
                    goods{
                        title
                    }
                }
			}
        }`;

        console.log(`q1: ${q1}`);

		try {
			const res: any = await httpUtil.toGet(q1);
            console.log('/graphql result ::',  util.inspect(res.body.data, true, 5));

            
            const arr = res.body.data.checkSellOrders;
            // 统计用的Map <宿舍楼, {商品}>
            
            let dormMap: Array<any> = [];

            // 遍历查询对比微信订单
            for (const order of arr) {
                const queryRes = await WechatUtils.queryOrderquery(order.id);
                const goods = order.ordergoodsrelations[0].goods;
                const goods_count = order.ordergoodsrelations[0].goods_count;
                // console.log(`===> 订单查询结果[${order.realname}: ${order.dormitory.drom_name}, 商品:[${goods.title}], 数量:[${goods_count}]]: `, 
                // JSON.stringify({
                //     result_code: queryRes.result_code,
                //     out_trade_no: queryRes.out_trade_no,
                //     attach: queryRes.attach,
                //     cash_fee: queryRes.cash_fee,
                //     trade_state_desc: queryRes.trade_state_desc,
                // }));
                dormMap.push({
                    goods_title: goods.title,
                    goods_count: goods_count,
                    dorm_name: order.dormitory.drom_name,
                    realname: order.realname,
                    result_code: queryRes.result_code,
                    out_trade_no: queryRes.out_trade_no,
                    attach: queryRes.attach,
                    cash_fee: queryRes.cash_fee,
                    trade_state_desc: queryRes.trade_state_desc,
                });
            }// end: iterator

            let totalcount = 0;
            dormMap.forEach((order) => {
                console.log(`order: ${JSON.stringify(order)}`);
                totalcount += order.goods_count;
            });
            console.log(`totalcount: ${totalcount}`);

		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});

});