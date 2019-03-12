"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
// import util = require('util');
// const WechatUtils = require('../../../app/utils/wx/WechatUtils');
describe('test/app/service/Test.test.js', () => {
    let ctx;
    before(async () => {
        ctx = bootstrap_1.app.mockContext();
    });
    // it('formartDateTime ::: ', async () => {
    //   const result = ctx.helper.formartDateTime(new Date(), true);
    //   console.log('result:: ', result);
    // });
    //   it('sayHi', async () => {
    //     const result = await ctx.service.gift.getActiveInfo();
    //     console.log('getActiveInfo ::',  result);
    //     // console.log('getActiveInfo ::',  util.inspect( result, true, 3));
    //     // assert(result === 'hi, egg');
    //   });
    it('sayHi', async () => {
        // const token = 'eyJkYXRhIjp7ImlkIjoiMjYxOTE0ZDAtZjE5MS0xMWU4LWFhMzAtNjdjNDBkYmE0MjMzIn0sImNyZWF0ZWQiOjI1Nzc5MTg0LCJleHAiOjUxODQwMH0=.1GPSHUpaU/QvHhtMZAf4nq/eIRMCL9b+7lvK88s4WKw=';
        // const query = JSON.stringify({
        //   query: `{ studentAll{ id,username } }`,
        // });
        // const data = await ctx.service.graphql.query(query);
        // console.log('GQL data ::',  util.inspect( data, true, 3));
        // const query2 = JSON.stringify({
        //   query: `{ student(id:2){ id,username } }`,
        // });
        // console.log('ctx.service.graphql: ', ctx.service.graphql);
        // const data2 = await ctx.service.order.queryOrders(2430);
        // console.log('GQL data ::',  util.inspect( data2, true, 3));
        // const {Order, Orderstruts} = ctx.model;
        // const include = [{
        // 	model: Orderstruts,
        //   required: true,
        //   where: {
        //     status: 0,
        //   }
        // }];
        // const data2 = await Order.findAll({
        //   include, 
        // });
        // const willpayorders = await ctx.model.query(
        //   'CALL proc_filter_order_disabled();'
        // );
        // console.log('查询到的状态为0 的数据有: ', willpayorders.length);
        // if (Array.isArray(willpayorders)) {
        //   for (const order of willpayorders) {
        //     console.log('遍历订单内容, id: ', order.id);
        //     console.log('遍历订单内容, 状态: ', order.status);
        //     console.log('遍历订单内容, 时间: ', order.created);
        //     console.log('微信订单状态: ');
        //     const orderRes = await WechatUtils.queryOrderquery(order.id);
        //     console.log(orderRes);
        //   }
        // }
        let out_trade_no = 'df80efebc9584bc58b4c772b403ce410';
        let out_result = 0;
        const closeOrderRes = await ctx.model.query('CALL proc_goods_repertory_change($$1,$$2,$$3);', {
            // replacements: [out_trade_no, 0],
            bind: [out_trade_no, 0, out_result]
        });
        console.log(out_trade_no, out_result, closeOrderRes);
        // WechatUtils.queryOrderquery(out_trade_no);
        // const data = await ctx.model.Student.findAll({raw: true});
        // console.log('GQL data ::',  data);
        // console.log('GQL data ::',  ctx.models);
        // const result = await ctx.service.area.getCityList({provincecode: '610000'});
        // console.log('getActiveInfo ::',  result);
        // console.log('getActiveInfo ::',  util.inspect( result, true, 3));
        // assert(result === 'hi, egg');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrREFBeUM7QUFDekMsaUNBQWlDO0FBQ2pDLG9FQUFvRTtBQUVwRSxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQzdDLElBQUksR0FBWSxDQUFDO0lBRWpCLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNoQixHQUFHLEdBQUcsZUFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsMkNBQTJDO0lBQzNDLGlFQUFpRTtJQUNqRSxzQ0FBc0M7SUFDdEMsTUFBTTtJQUVSLDhCQUE4QjtJQUM5Qiw2REFBNkQ7SUFDN0QsZ0RBQWdEO0lBQ2hELDJFQUEyRTtJQUMzRSx1Q0FBdUM7SUFDdkMsUUFBUTtJQUVOLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFckIscUxBQXFMO1FBRXJMLGlDQUFpQztRQUNqQyw0Q0FBNEM7UUFDNUMsTUFBTTtRQUNOLHVEQUF1RDtRQUN2RCw2REFBNkQ7UUFFN0Qsa0NBQWtDO1FBQ2xDLCtDQUErQztRQUMvQyxNQUFNO1FBQ04sNkRBQTZEO1FBRTdELDJEQUEyRDtRQUMzRCw4REFBOEQ7UUFFOUQsMENBQTBDO1FBQzFDLHFCQUFxQjtRQUN2Qix1QkFBdUI7UUFDckIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsTUFBTTtRQUNSLE1BQU07UUFDSixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLE1BQU07UUFDTiwrQ0FBK0M7UUFDL0MseUNBQXlDO1FBQ3pDLEtBQUs7UUFFTCx3REFBd0Q7UUFFeEQsc0NBQXNDO1FBQ3RDLHlDQUF5QztRQUN6Qyw2Q0FBNkM7UUFDN0MsaURBQWlEO1FBQ2pELGtEQUFrRDtRQUNsRCwrQkFBK0I7UUFDL0Isb0VBQW9FO1FBQ3BFLDZCQUE2QjtRQUM3QixNQUFNO1FBQ04sSUFBSTtRQUNKLElBQUksWUFBWSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3RELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixNQUFNLGFBQWEsR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxFQUFFO1lBQzVGLG1DQUFtQztZQUNqQyxJQUFJLEVBQUUsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBRTtTQUN4QyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFckQsNkNBQTZDO1FBRTdDLDZEQUE2RDtRQUM3RCxxQ0FBcUM7UUFFckMsMkNBQTJDO1FBRTNDLCtFQUErRTtRQUMvRSw0Q0FBNEM7UUFDNUMsb0VBQW9FO1FBQ3BFLGdDQUFnQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=