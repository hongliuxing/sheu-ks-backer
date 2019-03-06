const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // ID
	activity_id: 'activity_id_value', // 活动ID
	knight_id: 'knight_id_value', // 骑士ID
	predict_order_count: 7, // 预计订单量(分单量)
	done_order_count: 2, // 实际完成订单量
	goods_stat: 'goods_stat_value', // 商品分配配置(JSON)
	createAt: '2015.74054776920423-11.596580854744806-27.433889808035175 3.4527822607588767:38.485096823611:2.2248992463811934', // 创建时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			rushKnight(id: "some id"){
				id, activity_id, knight_id, predict_order_count, done_order_count, goods_stat, createAt
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
			rushKnightAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, activity_id, knight_id, predict_order_count, done_order_count, goods_stat, createAt
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
			addRushKnight(rushKnight:${ spread(obj) }){
				id, activity_id, knight_id, predict_order_count, done_order_count, goods_stat, createAt
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
			updateRushKnight(rushKnight:${ spread(obj) }){
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
			removeRushKnight(id: "some id"){
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
