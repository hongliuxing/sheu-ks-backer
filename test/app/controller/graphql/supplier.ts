const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 供应商id
	unionid: 'unionid_value', // 平台统一编号
	openid: 'openid_value', // App独立编号
	nickname: 'nickname_value', // 供应商昵称
	realname: 'realname_value', // 真实姓名(选填)
	phone_num: 'phone_num_value', // 供应商电话
	type: 'type_value', // 供应商类型
	sex: 2, // 供应商性别，0表示小哥哥，1表示小姐姐
	logo_url: 'logo_url_value', // 头像(默认获取微信头像url)
	notice: 'notice_value', // 公告
	business_status: 6, // 1营业中，0打烊中
	business_start: 'business_start_value', // 开始营业时间
	business_end: 'business_end_value', // 结束营业时间
	express_fee: 7, // 配送费
	min_amount: 3, // 配送金额
	school_id: 'school_id_value', // 学校id
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			supplier(id: "22c059b0-341f-11e9-817c-00163e08112a"){
				id, nickname, realname, phone_num
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
			supplierAll(order:[{key:"createAt",sort:DESC}],page:{limit:5}){
				id, unionid, openid, nickname, realname, phone_num, type, sex, logo_url, notice, business_status, business_start, business_end, express_fee, min_amount, school_id,
				createAt, address,
				dormitorysupplierrelation{
					dormitory{
						id, drom_name, drom_num
					}
				}
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 5));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}
export const add = async () => {
	it('should HTTP /add', async () => {
		const q1 = `mutation{
			addSupplier(supplier:${ spread(obj) }){
				id, unionid, openid, nickname, realname, phone_num, type, sex, logo_url, notice, business_status, business_start, business_end, express_fee, min_amount, school_id
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
			updateSupplier(supplier:${ spread(obj) }){
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
			removeSupplier(id: "some id"){
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
