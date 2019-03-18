const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	out_trade_no: 'out_trade_no_value', // 商户订单号
	status: 5, // 状态（0，待付款<被动>；1，已付款<被动>；2，商家已接单；3，骑士派送中；4，骑士已送达(待评价)；5，(评论)已完结<被动>；6：可退款；-1，预付款失败<被动>；-2，客户取消订单；-3，付款失败<被动>；-4，用户申请订单退费；-5，订单退费中；-6，订单已退费<被动>）
	prev_status: 6, // 上一个订单状态
	prepay_time: '208.380001632959889-4.366906060063221-9.777395306974714 14.824941537696159:50.34251268665368:7.89949857744797', // 预支付时间
	prepay_fail_time: '201.9912879720419774-9.624419216567581-14.873244393468246 12.66792918533305:6.930641141026639:37.823238072343955', // 预支付失败时间
	pay_time: '2017.362200376850332-11.715343599720416-13.824848716123494 15.171732626415466:26.178543598951514:18.323253225562624', // 付款成功时间
	pay_fail_time: '204.80207229382942-0.8162052526250436-4.454490202301178 5.076748304169605:22.122858959532557:47.65475462005562', // 付款失败时间 (付款失败说明:商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。)
	client_receive_fail_time: '2016.63551414969151-9.562503983474326-10.835165939824181 23.429516732873413:20.72577417394642:42.03087757759367', // 客户取消订单时间
	client_receive_fail_reason: 'client_receive_fail_reason_value', // 客户取消订单理由
	seller_receive_time: '206.135179785078506-0.2748464612470567-27.785411216698968 3.189688237524157:6.856184190343222:13.20507344422969', // 商家接单时间
	seller_receive_fail_time: '201.6968182897799755-1.0967133562883111-7.693148008141921 13.24209987780628:4.621952621327692:42.6974430120316', // 商家取消订单时间
	seller_receive_fail_reason: 'seller_receive_fail_reason_value', // 商家取消订单理由
	knight_receive_time: '2011.740786978111842-10.339433679115105-27.801022771097283 22.719143473720298:17.104866472797575:33.460337302826105', // 骑士接单时间
	knight_finish_time: '2014.18459521986069-3.0216820256850765-13.904824301424288 20.870196483370236:55.6948005362141:39.89889010301204', // 骑士送达时间
	client_refund_time: '209.173485631082986-10.68259741868771-18.232245373962954 2.6973698294105812:32.75722927867883:43.39260944409462', // 客户申请退费时间
	client_refund_reason: 'client_refund_reason_value', // 客户申请退费理由
	seller_refund_time: '202.764839063775546-9.200169169176533-6.756093757018209 7.94749448728478:24.306718466455692:48.96721048411051', // 商家确定退费时间
	refund_finish_time: '202.627485132271903-8.628523810201383-2.0568043020503533 18.779032829362027:20.818239780711167:7.285748059057928', // 客户退费到账时间
	created: '2015.532157408269454-2.733595737248179-0.5320100015451743 6.972222742451043:21.53268287797285:38.45873887443413', //
	modify_time: '2018.383513768531763-11.657359850513917-9.945543675569592 16.43230586123522:58.46125318738566:30.69324170624238', // 状态数据修改时间(乐观锁)
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			orderstruts(id: "some id"){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};
export const findAll = async () => {
	it('should HTTP /findAll', async () => {
		const q1 = `query={
			orderstrutsAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};
export const add = async () => {
	it('should HTTP /add', async () => {
		const q1 = `mutation{
			addOrderstruts(orderstruts:${ spread(obj) }){
				id, out_trade_no, status, prev_status, prepay_time, prepay_fail_time, pay_time, pay_fail_time, client_receive_fail_time, client_receive_fail_reason, seller_receive_time, seller_receive_fail_time, seller_receive_fail_reason, knight_receive_time, knight_finish_time, client_refund_time, client_refund_reason, seller_refund_time, refund_finish_time, created, modify_time
			}
		}`;

		try {
			const res: any = await httpUtil.toPost(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};
export const update = async () => {
	it('should HTTP /update', async () => {
		const q1 = `mutation{
			updateOrderstruts(orderstruts:${ spread(obj) }){
				err, msg, desc, info
			}
		}`;

		try {
			const res: any = await httpUtil.toPost(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};
export const remove = async () => {
	it('should HTTP /remove', async () => {
		const q1 = `mutation{
			removeOrderstruts(id: "some id"){
				err, msg, desc, info
			}
		}`;

		try {
			const res: any = await httpUtil.toPost(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};
