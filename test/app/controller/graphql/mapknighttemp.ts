const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	knight_id: 'knight_id_value', // 骑士ID,不重复(ObjectId)
	latitude: 'latitude_value', // 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
	longitude: 'longitude_value', // 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
	created: '2018.973743519240177-7.419600470414458-20.813620391928914 2.477542945390674:3.357287720929092:28.389226354603938', // 
	modify_time: '2012.479719414310168-4.353519513526991-13.294775934466514 7.059928646377822:8.555117993063224:56.45870183697966', // 数据修改时间(乐观锁)
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			mapknighttemp(id: "some id"){
				id, knight_id, latitude, longitude, created, modify_time
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
			mapknighttempAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, knight_id, latitude, longitude, created, modify_time
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
			addMapknighttemp(mapknighttemp:${ spread(obj) }){
				id, knight_id, latitude, longitude, created, modify_time
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
			updateMapknighttemp(mapknighttemp:${ spread(obj) }){
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
			removeMapknighttemp(id: "some id"){
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
