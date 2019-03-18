// const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	// id: uuidv1(), // 编号(ObjectId)
	id: '44d207289a914b84a8666bdbb8b4b848',
	school_id: '2379', // 学校编号(ObjectId)
	author_id: '66e2e08b180843c5b638aab305fb3385', // 作者编号,默认显示作者信息,可更改(ObjectId)
	realname: '阿拉拉布-2', // 姓名
	gender: 1, // 1小哥哥 0小姐姐
	mobile: '18392019102', // 手机
	school_area: '宿舍', // 学校区域(可自定义,宿舍、图书馆、公园、教室、居民楼等)
	detail: '男生宿舍29号楼3楼29303', // 详细地址
	is_default: 1, // 是否是默认地址( 0 不是, 1 是默认地址)
	created: '2010-10-11 20:31', //
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			address(id: "75c49b871232453488ff70d4fc9e2b45"){
				id, school_id, author_id, realname, gender, mobile, school_area, detail, is_default, created
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
			addressAll(order:[{key:"created",sort:DESC}],page:{limit:5}){
				id, school_id, author_id, realname, gender, mobile, school_area, detail, is_default, created
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
			addAddress(address:${ spread(obj) }){
				id, school_id, author_id, realname, gender, mobile, school_area, detail, is_default, created
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
			updateAddress(address:${ spread(obj) }){
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
			removeAddress(id: "some id"){
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
