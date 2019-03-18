"use strict";
// // import * as assert from 'assert';
// import { app } from 'egg-mock/bootstrap';
// import Token from '../../../app/utils/token';
// const Test = {
//     async partnerLogin(loginCode) {
//         const result = await app.httpRequest().post('/access/partnerlogin', {
//             dataType: 'json',
//         })
//         .send({
//             loginCode,
//         })
//             // .set('x-access-token', 'eyJkYXRhIjp7ImlkIjoiMDgyMDliNTgtY2FhNi0xMWU4LWE4ZDItNTRiZjY0NTgyNjMzIn0sImNyZWF0ZWQiOjI1NzA1NzAxLCJleHAiOjQzMjAwfQ==.6WSn1fqE0CtizCluf/zOJzWyuQq90GBD0d7+V5Go15Y=')
//             .expect(200)
//             .then((res) => {
//                 console.log('/access/partnerlogin Access ::', res.body);
//             });
//         // assert(result.text === 'hi, egg');
//         console.log('/access/partnerlogin Fail ::', result);
//     },
//     async partnerSMS(telephone: string){
//         console.log('/access/partnerSMS ........');
//         const result = await app.httpRequest().post('/access/partnerSMS', {
//             dataType: 'json',
//         })
//         .send({
//             telephone,
//         })
//             .set('x-access-token', 'eyJkYXRhIjp7ImlkIjoib1hxSTM0eGVFU214c3pUckRUN1ozZEUxTlE1WSJ9LCJleHAiOjE0NDAsImNyZWF0ZWQiOjI1ODQyNTgzfQ==.a3JERtPnFybDf5hDZB3VVirQHPi6S5HW5bwhJeR26Tg=')
//             .expect(200)
//             .then((res) => {
//                 console.log('/access/partnerSMS Access ::', res.body);
//             });
//         // assert(result.text === 'hi, egg');
//         console.log('/access/partnerSMS Fail ::', result);
//     },
//     async partnerRegister(){
//         console.log('/access/partnerSMS ........');
//         const result = await app.httpRequest().post('/access/partnerRegister', {
//             dataType: 'json',
//         })
//         .send({
//             telephone: '15929063725',
//             code: '920817',
//             smsToken: 'eyJkYXRhIjp7InNtc2NvZGUiOiI5MjA4MTcifSwiZXhwIjo1LCJjcmVhdGVkIjoyNTg0MjcxMX0=.VUNHEZb0X3jgGXnGrBv4TQFxbKcRHVU9PasHIubemVM=',
//             openid: 'oXqI34xeESmxszTrDT7Z3dE1NQ5Y',
//         })
//             .set('x-access-token', 'eyJkYXRhIjp7ImlkIjoiMzk1N2UxNjAtZWEzZi0xMWU4LTk1ODYtYzE1YjcxY2I3ZGQ1In0sImNyZWF0ZWQiOjI1ODEwNjc0LCJleHAiOjUxODQwMH0=.6Ek45TNBaUS3/2JgGHb8PI8Ax1aot8mWJH9E1t67VU8=')
//             .expect(200)
//             .then((res) => {
//                 console.log('/access/partnerRegister Access ::', res.body);
//             });
//         // assert(result.text === 'hi, egg');
//         console.log('/access/partnerRegister Fail ::', result);
//     },
//     getSMSToken(code){
//         const phoneToken = new Token();
//         return phoneToken.createToken({ smscode: code }, 5);
//     }
// }
// /**
//  *
//  */
// describe('test/app/controller/access.test.ts', () => {
//     it('should POST /', async () => {
//         const result = await Test.partnerLogin('021IGbrt0vilWg13z9pt0Qzbrt0IGbrZ');
//         console.log('res: ', result);
//         // const result = await Test.partnerSMS('18392019102');
//         // await Test.partnerRegister();
//         // console.log('res: ', result);
//         // console.log('SMS CODE: ', Test.getSMSToken('920817'));
//     });
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2Nlc3MudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1QyxnREFBZ0Q7QUFFaEQsaUJBQWlCO0FBQ2pCLHNDQUFzQztBQUN0QyxnRkFBZ0Y7QUFDaEYsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYiw2TUFBNk07QUFDN00sMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQiwyRUFBMkU7QUFDM0Usa0JBQWtCO0FBQ2xCLGdEQUFnRDtBQUNoRCwrREFBK0Q7QUFDL0QsU0FBUztBQUVULDJDQUEyQztBQUMzQyxzREFBc0Q7QUFDdEQsOEVBQThFO0FBQzlFLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2IsOExBQThMO0FBQzlMLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseUVBQXlFO0FBQ3pFLGtCQUFrQjtBQUNsQixnREFBZ0Q7QUFDaEQsNkRBQTZEO0FBQzdELFNBQVM7QUFFVCwrQkFBK0I7QUFDL0Isc0RBQXNEO0FBQ3RELG1GQUFtRjtBQUNuRixnQ0FBZ0M7QUFDaEMsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQix3Q0FBd0M7QUFDeEMsOEJBQThCO0FBQzlCLHFKQUFxSjtBQUNySixzREFBc0Q7QUFDdEQsYUFBYTtBQUNiLDBNQUEwTTtBQUMxTSwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLDhFQUE4RTtBQUM5RSxrQkFBa0I7QUFDbEIsZ0RBQWdEO0FBQ2hELGtFQUFrRTtBQUNsRSxTQUFTO0FBRVQseUJBQXlCO0FBQ3pCLDBDQUEwQztBQUMxQywrREFBK0Q7QUFDL0QsUUFBUTtBQUNSLElBQUk7QUFFSixNQUFNO0FBQ04sS0FBSztBQUNMLE1BQU07QUFDTix5REFBeUQ7QUFDekQsd0NBQXdDO0FBQ3hDLHNGQUFzRjtBQUN0Rix3Q0FBd0M7QUFDeEMsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0Msb0VBQW9FO0FBQ3BFLFVBQVU7QUFDVixNQUFNIn0=