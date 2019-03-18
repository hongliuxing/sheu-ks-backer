const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 宿舍楼商品关系表id
	dorm_id: 'dorm_id_value', // 宿舍id
	goods_id: 'goods_id_value', // 商品id
	total_count: 0, // 商品总量(整个宿舍楼的商品量,由存储过程触发增加)
	seller_count: 1, // 销售量
	create_time: '2010.402013366476943-0.6645758894752714-14.26906827614512 16.38945859894676:11.62038165699009:11.894242917407226', // 创建时间
	modify_time: '2014.648870624306314-11.355588094280112-19.492263291211223 12.020132321289928:57.65838025155862:23.848607934798235', // 修改时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			dormgoodsrelation(id: "some id"){
				id, dorm_id, goods_id, total_count, seller_count, create_time, modify_time
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
			dormgoodsrelationAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, dorm_id, goods_id, total_count, seller_count, create_time, modify_time
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
			addDormgoodsrelation(dormgoodsrelation:${ spread(obj) }){
				id, dorm_id, goods_id, total_count, seller_count, create_time, modify_time
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
			updateDormgoodsrelation(dormgoodsrelation:${ spread(obj) }){
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
			removeDormgoodsrelation(id: "some id"){
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
