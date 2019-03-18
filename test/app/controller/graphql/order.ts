const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	client_id: 'client_id_value', // 客户编号
	seller_id: 'seller_id_value', // 商家编号
	knight_id: 'knight_id_value', // 骑士编号
	address: 'address_value', // 地址序列化信息
	out_trade_no: 'out_trade_no_value', // 商户订单号(长度不超过128位)
	device: 'device_value', // 设备(小程序使用"xcx")
	spbill_create_ip: 'spbill_create_ip_value', // APP和网页支付提交用户端ip，Native支付填调用微信支付API的机器IP
	gift_fee: 18.93, // 礼券抵消金额(单位是"分")
	discount_fee: 49.07, // 折扣抵消金额(单位是"分")
	express_fee: 9.97, // 配送费(单位是"分")
	total_fee: 38.71, // 订单总金额(单位是"分")
	goods_detail: 'goods_detail_value', // 备注详情(预售订单创建之后,只有备注可修改)
	remark: 'remark_value', // 备注详情(预售订单创建之后,只有备注可修改)
	created: '2019.17105386274737-9.894542803415778-15.595100612319314 2.3065749521099796:17.13761870828588:44.25810671806788', //
	school_id: 'school_id_value', //
	realname: 'realname_value', //
	gender: 8, //
	mobile: 'mobile_value', //
	school_area: 'school_area_value', //
	detail: 'detail_value', //
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			order(id: "some id"){
				id, client_id, seller_id, knight_id, address, out_trade_no, device, spbill_create_ip, gift_fee, discount_fee, express_fee, total_fee, goods_detail, remark, created, school_id, realname, gender, mobile, school_area, detail
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
			orderAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, client_id, seller_id, knight_id, address, out_trade_no, device, spbill_create_ip, gift_fee, discount_fee, express_fee, total_fee, goods_detail, remark, created, school_id, realname, gender, mobile, school_area, detail
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
			addOrder(order:${ spread(obj) }){
				id, client_id, seller_id, knight_id, address, out_trade_no, device, spbill_create_ip, gift_fee, discount_fee, express_fee, total_fee, goods_detail, remark, created, school_id, realname, gender, mobile, school_area, detail
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
			updateOrder(order:${ spread(obj) }){
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
			removeOrder(id: "some id"){
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
