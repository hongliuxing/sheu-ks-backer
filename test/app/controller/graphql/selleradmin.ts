const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	unionid: 'unionid_value', // 平台统一编号
	openid: 'openid_value', // App独立编号
	nickname: 'nickname_value', // 昵称
	realname: 'realname_value', // 真实姓名
	person_id: 'person_id_value', // 身份证号
	telephone: 'telephone_value', // 联系方式
	logo_url: 'logo_url_value', // 头像
	gender: 0, // 1，男神；2，女神
	struts: 1, // 状态：（0 未审核，1 已审核，2、审核中）
	created: '2015.672430099892672-4.645642914476764-11.534769792023052 13.855895661129926:55.2450783242536:38.4726928030861', //
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			selleradmin(id: "some id"){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			selleradminAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			addSelleradmin(selleradmin:${ spread(obj) }){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			updateSelleradmin(selleradmin:${ spread(obj) }){
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
			removeSelleradmin(id: "some id"){
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
