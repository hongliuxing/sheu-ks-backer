// // import * as assert from 'assert';
// import { Context } from 'egg';
// import { app } from 'egg-mock/bootstrap';
// // import util = require('util');
// // const WechatUtils = require('../../../app/utils/wx/WechatUtils');

// describe('test/app/service/Test.test.js', () => {
//   let ctx: Context;

//   before(async () => {
//     ctx = app.mockContext();
//   });

//   // it('formartDateTime ::: ', async () => {
//   //   const result = ctx.helper.formartDateTime(new Date(), true);
//   //   console.log('result:: ', result);
//   // });

// //   it('sayHi', async () => {
// //     const result = await ctx.service.gift.getActiveInfo();
// //     console.log('getActiveInfo ::',  result);
// //     // console.log('getActiveInfo ::',  util.inspect( result, true, 3));
// //     // assert(result === 'hi, egg');
// //   });

//   it('sayHi', async () => {

//     // const token = 'eyJkYXRhIjp7ImlkIjoiMjYxOTE0ZDAtZjE5MS0xMWU4LWFhMzAtNjdjNDBkYmE0MjMzIn0sImNyZWF0ZWQiOjI1Nzc5MTg0LCJleHAiOjUxODQwMH0=.1GPSHUpaU/QvHhtMZAf4nq/eIRMCL9b+7lvK88s4WKw=';

//     // const query = JSON.stringify({
//     //   query: `{ studentAll{ id,username } }`,
//     // });
//     // const data = await ctx.service.graphql.query(query);
//     // console.log('GQL data ::',  util.inspect( data, true, 3));

//     // const query2 = JSON.stringify({
//     //   query: `{ student(id:2){ id,username } }`,
//     // });
//     // console.log('ctx.service.graphql: ', ctx.service.graphql);

//     // const data2 = await ctx.service.order.queryOrders(2430);
//     // console.log('GQL data ::',  util.inspect( data2, true, 3));

//     // const {Order, Orderstruts} = ctx.model;
//     // const include = [{
// 		// 	model: Orderstruts,
//     //   required: true,
//     //   where: {
//     //     status: 0,
//     //   }
// 		// }];
//     // const data2 = await Order.findAll({
//     //   include, 
//     // });
//     // const willpayorders = await ctx.model.query(
//     //   'CALL proc_filter_order_disabled();'
//     // );

//     // console.log('查询到的状态为0 的数据有: ', willpayorders.length);

//     // if (Array.isArray(willpayorders)) {
//     //   for (const order of willpayorders) {
//     //     console.log('遍历订单内容, id: ', order.id);
//     //     console.log('遍历订单内容, 状态: ', order.status);
//     //     console.log('遍历订单内容, 时间: ', order.created);
//     //     console.log('微信订单状态: ');
//     //     const orderRes = await WechatUtils.queryOrderquery(order.id);
//     //     console.log(orderRes);
//     //   }
//     // }


//     let out_trade_no = 'df80efebc9584bc58b4c772b403ce410';
//     let out_result = 0;
//     const closeOrderRes = await ctx.model.query('CALL proc_goods_repertory_change($$1,$$2,$$3);', {
//       // replacements: [out_trade_no, 0],
//         bind: [ out_trade_no, 0, out_result ]
//     });
//     console.log(out_trade_no, out_result, closeOrderRes);


    
//     // WechatUtils.queryOrderquery(out_trade_no);

//     // const data = await ctx.model.Student.findAll({raw: true});
//     // console.log('GQL data ::',  data);

//     // console.log('GQL data ::',  ctx.models);

//     // const result = await ctx.service.area.getCityList({provincecode: '610000'});
//     // console.log('getActiveInfo ::',  result);
//     // console.log('getActiveInfo ::',  util.inspect( result, true, 3));
//     // assert(result === 'hi, egg');
//   });
// });
