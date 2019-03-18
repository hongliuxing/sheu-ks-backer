const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // ID
	school_id: 3, // 所在学校
	partner_id: 'partner_id_value', // 创建活动的合伙人
	title: 'title_value', // 活动名称
	logo_url: 'logo_pic_value', // 活动图片
	struts_show: 0, // 活动显示状态(0禁止 1显示)
	begin_show: '200.04839809624681113-1.928851372535144-14.80139474104156 23.300005908351245:34.27391667179538:29.197281836646223', // 活动开始显示时间
	end_show: '205.556944911911281-10.283215938950876-14.703824802825068 14.071685172040475:18.203435526995882:32.011439108926886', // 活动结束显示时间
	begin_rush: '2016.262761028934175-3.1560300694223082-1.6274819584812175 17.432871045677466:26.073608928894387:35.839684978939694', // 抢购开始时间
	end_rush: '2017.196706197704863-9.15080956220945-20.205344639743956 3.334076464961038:44.931529676914344:10.47760565968976', // 抢购结束时间
	createAt: '2015.584677268924082-4.163211464556432-6.308166867557662 18.400529331093786:49.10884900926088:34.9519700814859', // 创建时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			rushActivity(id: "some id"){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
			rushActivityAll(school_id:2430){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
		// const q1 = `mutation{
		// 	addRushActivity(rushActivity:${ spread(obj) }){
		// 		id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
		// 	}
		// }`;

		const q1 = `mutation{
			addRushActivity(rushActivity: {
				logo_url: "https://sheu-huabei5.oss-cn-huhehaote.aliyuncs.com/kuaisong/supplier/headpic/wxaa6bce288a81f5ce.o6zAJs0_GiwtacOtWzvfFDK-ruhM.OuFn4oOO7VQc8186c51b915c3e3c2636a3b2d3bedf35.jpg",
				title: "面食日",school_id: 2430,struts: 1,begin_rush: "2019-02-26 21:02",end_rush: "2019-02-26 23:03"}){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
			updateRushActivity(rushActivity:${ spread(obj) }){
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
			removeRushActivity(id: "some id"){
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
