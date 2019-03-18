const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	sid: uuidv1(), //
	uName: 'uName_value', //
	level: 'level_value', //
	lat: 'lat_value', //
	lng: 'lng_value', //
	province: 'province_value', //
	city: 'city_value', //
	district: 'district_value', //
	province_code: 'province_code_value', //
	city_code: 'city_code_value', //
	district_code: 'district_code_value', //
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			school(id: "some id"){
				sid, uName, level, lat, lng, province, city, district, province_code, city_code, district_code
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
			schoolAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				sid, uName, level, lat, lng, province, city, district, province_code, city_code, district_code
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
			addSchool(school:${ spread(obj) }){
				sid, uName, level, lat, lng, province, city, district, province_code, city_code, district_code
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
			updateSchool(school:${ spread(obj) }){
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
			removeSchool(id: "some id"){
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
