"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
const util = require("util");
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
        const data2 = await ctx.service.order.queryOrders(2430);
        console.log('GQL data ::', util.inspect(data2, true, 3));
        // const data = await ctx.model.Student.findAll({raw: true});
        // console.log('GQL data ::',  data);
        // console.log('GQL data ::',  ctx.models);
        // const result = await ctx.service.area.getCityList({provincecode: '610000'});
        // console.log('getActiveInfo ::',  result);
        // console.log('getActiveInfo ::',  util.inspect( result, true, 3));
        // assert(result === 'hi, egg');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrREFBeUM7QUFDekMsNkJBQThCO0FBRTlCLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLEVBQUU7SUFDN0MsSUFBSSxHQUFZLENBQUM7SUFFakIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLEdBQUcsR0FBRyxlQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCwyQ0FBMkM7SUFDM0MsaUVBQWlFO0lBQ2pFLHNDQUFzQztJQUN0QyxNQUFNO0lBRVIsOEJBQThCO0lBQzlCLDZEQUE2RDtJQUM3RCxnREFBZ0Q7SUFDaEQsMkVBQTJFO0lBQzNFLHVDQUF1QztJQUN2QyxRQUFRO0lBRU4sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUVyQixxTEFBcUw7UUFFckwsaUNBQWlDO1FBQ2pDLDRDQUE0QztRQUM1QyxNQUFNO1FBQ04sdURBQXVEO1FBQ3ZELDZEQUE2RDtRQUU3RCxrQ0FBa0M7UUFDbEMsK0NBQStDO1FBQy9DLE1BQU07UUFDTiw2REFBNkQ7UUFDN0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0QsNkRBQTZEO1FBQzdELHFDQUFxQztRQUVyQywyQ0FBMkM7UUFFM0MsK0VBQStFO1FBQy9FLDRDQUE0QztRQUM1QyxvRUFBb0U7UUFDcEUsZ0NBQWdDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==