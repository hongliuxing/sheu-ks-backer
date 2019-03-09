"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    out_trade_no: 'out_trade_no_value',
    status: 5,
    prev_status: 6,
    prepay_time: '208.380001632959889-4.366906060063221-9.777395306974714 14.824941537696159:50.34251268665368:7.89949857744797',
    prepay_fail_time: '201.9912879720419774-9.624419216567581-14.873244393468246 12.66792918533305:6.930641141026639:37.823238072343955',
    pay_time: '2017.362200376850332-11.715343599720416-13.824848716123494 15.171732626415466:26.178543598951514:18.323253225562624',
    pay_fail_time: '204.80207229382942-0.8162052526250436-4.454490202301178 5.076748304169605:22.122858959532557:47.65475462005562',
    client_receive_fail_time: '2016.63551414969151-9.562503983474326-10.835165939824181 23.429516732873413:20.72577417394642:42.03087757759367',
    client_receive_fail_reason: 'client_receive_fail_reason_value',
    seller_receive_time: '206.135179785078506-0.2748464612470567-27.785411216698968 3.189688237524157:6.856184190343222:13.20507344422969',
    seller_receive_fail_time: '201.6968182897799755-1.0967133562883111-7.693148008141921 13.24209987780628:4.621952621327692:42.6974430120316',
    seller_receive_fail_reason: 'seller_receive_fail_reason_value',
    knight_receive_time: '2011.740786978111842-10.339433679115105-27.801022771097283 22.719143473720298:17.104866472797575:33.460337302826105',
    knight_finish_time: '2014.18459521986069-3.0216820256850765-13.904824301424288 20.870196483370236:55.6948005362141:39.89889010301204',
    client_refund_time: '209.173485631082986-10.68259741868771-18.232245373962954 2.6973698294105812:32.75722927867883:43.39260944409462',
    client_refund_reason: 'client_refund_reason_value',
    seller_refund_time: '202.764839063775546-9.200169169176533-6.756093757018209 7.94749448728478:24.306718466455692:48.96721048411051',
    refund_finish_time: '202.627485132271903-8.628523810201383-2.0568043020503533 18.779032829362027:20.818239780711167:7.285748059057928',
    created: '2015.532157408269454-2.733595737248179-0.5320100015451743 6.972222742451043:21.53268287797285:38.45873887443413',
    modify_time: '2018.383513768531763-11.657359850513917-9.945543675569592 16.43230586123522:58.46125318738566:30.69324170624238',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			orderstruts(id: "some id"){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.findAll = async () => {
    it('should HTTP /findAll', async () => {
        const q1 = `query={
			orderstrutsAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.add = async () => {
    it('should HTTP /add', async () => {
        const q1 = `mutation{
			addOrderstruts(orderstruts:${gql_util_1.spread(obj)}){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.update = async () => {
    it('should HTTP /update', async () => {
        const q1 = `mutation{
			updateOrderstruts(orderstruts:${gql_util_1.spread(obj)}){
				err, msg, desc, info
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.remove = async () => {
    it('should HTTP /remove', async () => {
        const q1 = `mutation{
			removeOrderstruts(id: "some id"){
				err, msg, desc, info
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzdHJ1dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlcnN0cnV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsMENBQTBDO0FBQzFDLGdEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBRztJQUNYLEVBQUUsRUFBRSxNQUFNLEVBQUU7SUFDWixZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLE1BQU0sRUFBRSxDQUFDO0lBQ1QsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsK0dBQStHO0lBQzVILGdCQUFnQixFQUFFLGtIQUFrSDtJQUNwSSxRQUFRLEVBQUUscUhBQXFIO0lBQy9ILGFBQWEsRUFBRSxnSEFBZ0g7SUFDL0gsd0JBQXdCLEVBQUUsaUhBQWlIO0lBQzNJLDBCQUEwQixFQUFFLGtDQUFrQztJQUM5RCxtQkFBbUIsRUFBRSxpSEFBaUg7SUFDdEksd0JBQXdCLEVBQUUsZ0hBQWdIO0lBQzFJLDBCQUEwQixFQUFFLGtDQUFrQztJQUM5RCxtQkFBbUIsRUFBRSxxSEFBcUg7SUFDMUksa0JBQWtCLEVBQUUsaUhBQWlIO0lBQ3JJLGtCQUFrQixFQUFFLGlIQUFpSDtJQUNySSxvQkFBb0IsRUFBRSw0QkFBNEI7SUFDbEQsa0JBQWtCLEVBQUUsK0dBQStHO0lBQ25JLGtCQUFrQixFQUFFLGtIQUFrSDtJQUN0SSxPQUFPLEVBQUUsaUhBQWlIO0lBQzFILFdBQVcsRUFBRSxpSEFBaUg7Q0FDOUgsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQyxNQUFNLEVBQUUsR0FBRzs7OztJQUlULENBQUM7UUFFSCxJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUE7QUFDWSxRQUFBLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtJQUNqQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDckMsTUFBTSxFQUFFLEdBQUc7Ozs7SUFJVCxDQUFDO1FBRUgsSUFBSTtZQUNILE1BQU0sR0FBRyxHQUFRLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFBO0FBQ1ksUUFBQSxHQUFHLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDN0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2pDLE1BQU0sRUFBRSxHQUFHO2dDQUNvQixpQkFBTSxDQUFDLEdBQUcsQ0FBRTs7O0lBR3pDLENBQUM7UUFFSCxJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUE7QUFDWSxRQUFBLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRTtJQUNoQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEMsTUFBTSxFQUFFLEdBQUc7bUNBQ3VCLGlCQUFNLENBQUMsR0FBRyxDQUFFOzs7SUFHNUMsQ0FBQztRQUVILElBQUk7WUFDSCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUNZLFFBQUEsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ2hDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwQyxNQUFNLEVBQUUsR0FBRzs7OztJQUlULENBQUM7UUFFSCxJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUEifQ==