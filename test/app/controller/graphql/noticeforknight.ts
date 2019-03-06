const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	partner_id: 'partner_id_value', // 合伙人编号
	ntype: 5, // 公告类型(0 统一公告 1 审核公告)
	title: 'title_value', // 公告标题
	content: 'content_value', // 公告内容
	created: '2017.426436703157727-6.03337780492081-27.170200146157068 7.53579207430049:5.9352689777068335:56.93733134980234', // 
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			noticeforknight(id: "some id"){
				id, partner_id, ntype, title, content, created
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
			noticeforknightAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, partner_id, ntype, title, content, created
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
			addNoticeforknight(noticeforknight:${ spread(obj) }){
				id, partner_id, ntype, title, content, created
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
			updateNoticeforknight(noticeforknight:${ spread(obj) }){
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
			removeNoticeforknight(id: "some id"){
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
