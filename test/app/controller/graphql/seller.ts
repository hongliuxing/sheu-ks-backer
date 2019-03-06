const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	openid: 'openid_value', // openid
	business_id: 'business_id_value', // 营业类型编号
	seller_admin_id: 'seller_admin_id_value', // 商家负责人编号
	title: 'title_value', // 店名
	logo_url: 'logo_url_value', // 头像
	telephone: 'telephone_value', // 联系电话
	address: 'address_value', // 地址
	notice: 'notice_value', // 公告
	business_status: 8, // 1营业中，0打烊中
	business_start: 'business_start_value', // 开始营业时间
	business_end: 'business_end_value', // 结束营业时间
	express_fee: 2, // 配送费
	min_amount: 5, // 配送金额
	struts: 1, // 状态，
	created: '2014.769446971997136-1.7840789273647086-5.003161611302576 13.54558319246008:10.59230674029321:36.278979614906184', // 
	school_id: 7, // 学校id
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			seller(id: "some id"){
				id, openid, business_id, seller_admin_id, title, logo_url, telephone, address, notice, business_status, business_start, business_end, express_fee, min_amount, struts, created, school_id
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}
export const findAll = async () => {
	it('should HTTP /findAll', async () => {
		const q1 = `query={
			sellerAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, openid, business_id, seller_admin_id, title, logo_url, telephone, address, notice, business_status, business_start, business_end, express_fee, min_amount, struts, created, school_id
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}
export const add = async () => {
	it('should HTTP /add', async () => {
		const q1 = `mutation{
			addSeller(seller:${ spread(obj) }){
				id, openid, business_id, seller_admin_id, title, logo_url, telephone, address, notice, business_status, business_start, business_end, express_fee, min_amount, struts, created, school_id
			}
		}`;

		try {
			const res: any = await httpUtil.toPost(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 3));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}
export const update = async () => {
	it('should HTTP /update', async () => {
		const q1 = `mutation{
			updateSeller(seller:${ spread(obj) }){
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
}
export const remove = async () => {
	it('should HTTP /remove', async () => {
		const q1 = `mutation{
			removeSeller(id: "some id"){
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
}
