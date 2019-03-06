const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	seller_id: 'seller_id_value', // 商家编号
	title: 'title_value', // 频道名称
	school_id: 1, // 商品数量
	priority: 4, // 优先级
	created: '2010.879005302965453-11.394142336273944-24.509641420904476 18.033837093452686:56.495518107778764:53.701967644160966', // 
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			goodschannel(id: "some id"){
				id, seller_id, title, school_id, priority, created
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
			goodschannelAll(school_id: 2430){
				id, seller_id, title, school_id, priority, created, gcount
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
			addGoodschannel(goodschannel:${ spread(obj) }){
				id, seller_id, title, school_id, priority, created
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
			updateGoodschannel(goodschannel:${ spread(obj) }){
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
			removeGoodschannel(id: "some id"){
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
