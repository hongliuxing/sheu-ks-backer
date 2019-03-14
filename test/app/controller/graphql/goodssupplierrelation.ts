const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 供应商和商品关联表id
	goods_id: 'goods_id_value', // 商品id
	supplier_id: 'supplier_id_value', // 供应商id
	current_count: 7, // 当前数量
	seller_count: 2, // 销售数量
	modify_time: '208.324634888103638-0.5742989022429708-14.210044517686814 23.022984981038416:59.6405587194604:40.662733071095985', // 修改时间
	create_time: '202.599576246392963-3.2929811652187917-7.067355845432611 11.313221484788208:0.8500833639894179:54.031896452854106', // 创建时间
};

export const find = async (goods_id, supplier_id) => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			goodssupplierrelation(goods_id: "${goods_id}", supplier_id: "${supplier_id}"){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, 
				goods{
					id, thumb_url, title, good_type, summary, price, discount_price, 
					priority, struts, goodschannel{
						title
					}
				},
				supplier{
					unionid, openid, nickname, realname, phone_num, address
				}
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
export const findAll = async (where) => {
	it('should HTTP /findAll', async () => {
		const q1 = `query={
			goodssupplierrelationAll(order:[{key:"create_time",sort:DESC}],page:{limit:50, index: 1}, 
				where: ${ spread(where) }
			){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, create_time,
				goods{
					id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, price, discount_price, 
					priority, struts, created, goodschannel{
						id, seller_id, title, school_id, priority, created, gcount
					}
				},
				supplier{
					id, unionid, openid, nickname, realname, phone_num, type, sex, logo_url, notice, business_status, business_start, business_end, express_fee, min_amount, school_id, createAt, address
				}
			}
		}`;
		console.log(q1);

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 5));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}

export const remainingAll = async (supplier_id, channel_id) => {
	it('should HTTP /findAll', async () => {
		const q1 = `query={
			goodssupplierrelationRemainingAll(order:[{key:"created",sort:DESC}],page:{limit:200, index: 1}, 
			supplier_id: "${ supplier_id }", channel_id: "${channel_id}"
			){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, 
				price, discount_price, priority, struts, created, goodschannel{
					title
				}
			}
		}`;
		console.log(q1);

		try {
			const res: any = await httpUtil.toGet(q1);
			console.log('/graphql result ::',  util.inspect(res.body, true, 5));
		} catch (err) {
			console.log('/graphql try->catch ::', err);
		}
	});
}

export const add = async () => {
	it('should HTTP /add', async () => {
		const q1 = `mutation{
			addGoodssupplierrelation(goodssupplierrelation:${ spread(obj) }){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, create_time
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
		// const q1 = `mutation{
		// 	updateGoodssupplierrelation(goodssupplierrelation:${ spread(obj) }){
		// 		err, msg, desc, info
		// 	}
		// }`;

		const q1 = `mutation{
			updateGoodssupplierrelation(
				goodssupplierrelation: {
					goods_id: "17637800-4320-11e9-8219-5b1c993210c3",
					supplier_id: "123415f0-3bba-11e9-b878-cb83b89bb04b",current_count: 4
				}){
				err, msg, desc, info
			}
		}`

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
			removeGoodssupplierrelation(id: "some id"){
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
