const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	unionid: 'unionid_value', // 平台统一编号
	openid: 'openid_value', // App独立编号
	nickname: 'nickname_value', // 昵称(通常是微信昵称)
	realname: 'realname_value', // 真实姓名(必填)
	telephone: 'telephone_value', // 联系方式(必填)
	logo_url: 'logo_url_value', // 头像(默认获取微信头像url)
	gender: 9, //  1小哥哥 0小姐姐
	struts: 7, // 状态（0 未审核  1 已审核）
	created: '205.981608700849592-10.707445894495248-16.63089473743262 12.164578036957892:45.765932306760035:18.473804435035902', // 
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			sysaaauser(id: "some id"){
				id, unionid, openid, nickname, realname, telephone, logo_url, gender, struts, created
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
			sysaaauserAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, unionid, openid, nickname, realname, telephone, logo_url, gender, struts, created
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
			addSysaaauser(sysaaauser:${ spread(obj) }){
				id, unionid, openid, nickname, realname, telephone, logo_url, gender, struts, created
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
			updateSysaaauser(sysaaauser:${ spread(obj) }){
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
			removeSysaaauser(id: "some id"){
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
