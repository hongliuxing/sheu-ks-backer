"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('util');
const httpUtil = require("./utils/base");
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
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body.data, true, 5));
            const arr = res.body.data.checkSellOrders;
            // 统计用的Map <宿舍楼, {商品}>
            let dormMap = [];
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
            } // end: iterator
            let totalcount = 0;
            dormMap.forEach((order) => {
                console.log(`order: ${JSON.stringify(order)}`);
                totalcount += order.goods_count;
            });
            console.log(`totalcount: ${totalcount}`);
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJjaGVjay50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXJjaGVjay50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLHlDQUF5QztBQUN6QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUNqRSwyQ0FBMkM7QUFDM0MsNENBQTRDO0FBQzVDLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0IsS0FBSztBQUVMLFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7SUFFOUMsa0VBQWtFO0lBRWxFLG9FQUFvRTtJQUVwRSxNQUFNLFFBQVEsR0FBRyxzQ0FBc0MsQ0FBQyxDQUFDLFNBQVM7SUFDbEUsa0RBQWtEO0lBRWxELEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4QyxNQUFNLEVBQUUsR0FBRztnQ0FDbUIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O1VBZTlCLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvQixJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUd6RSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDMUMsc0JBQXNCO1lBRXRCLElBQUksT0FBTyxHQUFlLEVBQUUsQ0FBQztZQUU3QixhQUFhO1lBQ2IsS0FBSyxNQUFNLEtBQUssSUFBSSxHQUFHLEVBQUU7Z0JBQ3JCLE1BQU0sUUFBUSxHQUFHLE1BQU0sV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQzdELDJIQUEySDtnQkFDM0gsbUJBQW1CO2dCQUNuQix5Q0FBeUM7Z0JBQ3pDLDJDQUEyQztnQkFDM0MsK0JBQStCO2dCQUMvQixtQ0FBbUM7Z0JBQ25DLG1EQUFtRDtnQkFDbkQsT0FBTztnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNULFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDeEIsV0FBVyxFQUFFLFdBQVc7b0JBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVM7b0JBQ3BDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtvQkFDeEIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXO29CQUNqQyxZQUFZLEVBQUUsUUFBUSxDQUFDLFlBQVk7b0JBQ25DLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtvQkFDdkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO29CQUMzQixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCO2lCQUM5QyxDQUFDLENBQUM7YUFDTixDQUFBLGdCQUFnQjtZQUVqQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLFVBQVUsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FFbEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDLENBQUMsQ0FBQztBQUVKLENBQUMsQ0FBQyxDQUFDIn0=