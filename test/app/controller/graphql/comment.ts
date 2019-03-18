const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号(ObjectId)
	seller_id: 'seller_id_value', // 商家编号(ObjectId)
	author_id: 'author_id_value', // 作者编号(ObjectId)
	order_id: 'order_id_value', // 订单编号
	anonymity: 6, // 匿名状态( 0匿名 1显示(默认) )
	score: 3, // 分数,星级由分数汇总而定( 0-100 )
	content: 'content_value', // 内容
	struts: 0, // 状态（备用）
	created: '2012.1457695242007-1.8297809407318706-0.5938469320921689 23.508661825912412:9.808986630212143:39.643445893727375', // 创建时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			comment(id: "some id"){
				id, seller_id, author_id, order_id, anonymity, score, content, struts, created
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
			commentAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, seller_id, author_id, order_id, anonymity, score, content, struts, created
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
			addComment(comment:${ spread(obj) }){
				id, seller_id, author_id, order_id, anonymity, score, content, struts, created
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
			updateComment(comment:${ spread(obj) }){
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
			removeComment(id: "some id"){
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
