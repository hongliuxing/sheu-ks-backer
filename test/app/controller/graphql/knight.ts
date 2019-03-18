const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	unionid: 'unionid_value', // 平台统一编号
	openid: 'openid_value', // App独立编号
	nickname: 'nickname_value', // 昵称(通常是微信昵称)
	realname: 'realname_value', // 真实姓名
	person_id: 'person_id_value', // 身份证号
	telephone: 'telephone_value', // 联系方式
	logo_url: 'logo_url_value', // 头像
	school_id: 'school_id_value', // 骑手对应的学校id
	gender: 9, // 1男神 0女神
	struts: 3, // 状态（0 未审核  1 已审核）
	created: '203.8613217925330146-8.96677051983864-0.4292755956668062 21.339315526164395:11.392467840195701:1.9282680396552587', //
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			knight(id: "some id"){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created
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
			knightAll(order:[{key:"created",sort:DESC}],page:{limit:6, index: 1}, 
				where: {struts: 1}
			){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created,
				dorm_id, dormitory{
					drom_name, drom_num
				}
			}
		}`;

		console.log(q1);

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 4));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};

export const screenRushKnightAll = async () => {
	it('should HTTP /screenRushKnightAll', async () => {
		const q1 = `query={
			screenRushKnightAll(
				where: {school_id: 2430, activity_id: "82f3d5b0-38a8-11e9-bf0a-efe4adef46e9"}
			){
				id, nickname, realname, person_id, telephone, logo_url, school_id, gender, created,
				dorm_id, kcount, drom_name, drom_num
			}
		}`;

		console.log(q1);

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 4));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
};

/**
 *
 */
export const add = async () => {
	it('should HTTP /add', async () => {
		const q1 = `mutation{
			addKnight(knight:${ spread(obj) }){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created
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
			updateKnight(knight:${ spread(obj) }){
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
			removeKnight(id: "some id"){
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
