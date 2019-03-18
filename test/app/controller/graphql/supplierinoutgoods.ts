const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 商品进销存id
	supplier_id: 'supplier_id_value', // 供应商id
	goods_id: 'goods_id_value', // 商品id
	partner_id: 'partner_id_value', // 进货操作人id
	state: 6, // 状态(1进货, 2出货)
	total_count: 2, // 数量
	remark: 'remark_value', // 备注
	create_time: '203.848510695040863-5.17161871145538-11.252130839012402 20.777784121219092:31.5281793360607:9.427911171645903', // 创建时间
	modify_time: '2013.294870974412088-10.784354797009765-2.1321747831613482 14.727992271313246:47.59743128292914:45.74646809071973', // 修改时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			supplierinoutgoods(id: "some id"){
				id, supplier_id, goods_id, partner_id, state, total_count, remark, create_time, modify_time
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
			supplierinoutgoodsAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, supplier_id, goods_id, partner_id, state, total_count, remark, create_time, modify_time
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
			addSupplierinoutgoods(supplierinoutgoods:${ spread(obj) }){
				id, supplier_id, goods_id, partner_id, state, total_count, remark, create_time, modify_time
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
			updateSupplierinoutgoods(supplierinoutgoods:${ spread(obj) }){
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
			removeSupplierinoutgoods(id: "some id"){
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
