const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	seller_id: 'seller_id_value', // 商家编号
	dorm_id: 'dorm_id_value', // 供应商id
	channel_id: 'channel_id_value', // 频道编号
	thumb_url: 'thumb_url_value', // 主图
	title: 'title_value', // 商品名称
	good_type: 2, // 商品类型,0：零食，1：餐饮
	summary: 'summary_value', // 简述
	price: 50.45, // 单价
	discount_price: 17.97, // 折扣后金额
	priority: 0, // 优先级
	struts: 6, // 状态
	created: '2010.14365672232595-10.717390605992811-24.964498261438884 1.381756524433225:10.089147009072143:21.857115688642196', // 
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			goods(id: "some id"){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, price, discount_price, priority, struts, created
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
			goodsAll(order:[{key:"created",sort:DESC}],page:{limit:5}, where: {struts: 1}){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, price, discount_price, priority, struts, created
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
			addGoods(goods:${ spread(obj) }){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, price, discount_price, priority, struts, created
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
			updateGoods(goods:${ spread(obj) }){
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
			removeGoods(id: "some id"){
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
