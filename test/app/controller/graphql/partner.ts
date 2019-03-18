const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	unionid: 'unionid_value', // 平台统一编号
	openid: 'openid_value', // App独立编号
	school_id: 'school_id_value', // 学校编号
	nickname: 'nickname_value', // 昵称(通常是微信昵称)
	realname: 'realname_value', // 真实姓名(必填)
	person_id: 'person_id_value', // 身份证号(必填)
	telephone: 'telephone_value', // 联系方式(必填)
	logo_url: 'logo_url_value', // 头像(默认获取微信头像url)
	gender: 0, // 1小哥哥 0小姐姐
	struts: 3, // 状态（0 未审核  1 已审核）
	created: '2013.218198728193556-4.906615913978627-26.634086633871824 14.629386031551066:36.73119345534749:25.224491822080868', //
};
/**
 * partnerLogin
 */
export const partnerLogin = async () => {
	it('should HTTP /partnerLogin', async () => {
		// const q1 = `query={
		// 	partnerLogin(loginCode: "asdwadas"){
		// 		err, desc
		// 	}
		// }`;
		const q1 = `query={
			partnerLogin(loginCode: "asdwadas"){
				... on MessageQuery {
					err
				}
				... on Partner {
					id, openid
				}
			}
		}`;

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 4));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			partner(id: "some id"){
				id, unionid, openid, school_id, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			partnerAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, unionid, openid, school_id, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			addPartner(partner:${ spread(obj) }){
				id, unionid, openid, school_id, nickname, realname, person_id, telephone, logo_url, gender, struts, created
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
			updatePartner(partner:${ spread(obj) }){
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
			removePartner(id: "some id"){
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
