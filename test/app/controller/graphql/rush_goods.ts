const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // ID
	activity_id: 'activity_id_value', // 活动ID
	goods_id: 'goods_id_value', // 商品关联ID
	struts: 9, // 状态
	createAt: '2014.375014737212584-6.380628749873497-26.52145763613063 8.184470934648546:41.14301779341504:9.19678573554696', // 创建时间
	updateAt: '207.889185126939888-0.9471858984281827-4.100627603262875 16.74823269897236:48.301947594208464:39.56869459620214', // 修改时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			rushGoods(id: "some id"){
				id, activity_id, goods_id, struts, createAt, updateAt
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
			rushGoodsAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, activity_id, goods_id, struts, createAt, updateAt
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
/**
 * screenRushGoods
 */
export const screenRushGoods = async () => {
	const activity_id = '82f3d5b0-38a8-11e9-bf0a-efe4adef46e9';
	const school_id = 2430;
	const own = true;
	it('should HTTP /screenRushGoods', async () => {
		const q1 = `query={
			screenRushGoods(activity_id: "${activity_id}", school_id: ${school_id}, own: ${own}){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, 
				price, discount_price, priority, struts, created,
				seller_title, seller_telephone, seller_address
			}
		}`;

		console.log('/screenRushGoods query ::', q1);

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 5));
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
			addRushGoods(rushGoods:${ spread(obj) }){
				id, activity_id, goods_id, struts, createAt, updateAt
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
			updateRushGoods(rushGoods:${ spread(obj) }){
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
			removeRushGoods(id: "some id"){
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
