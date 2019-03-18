const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	school_id: 'school_id_value', // 学校编号
	knight_id: 'knight_id_value', // 骑士编号
	partner_id: 'partner_id_value', // (校园)审核人编号
	realname: 'realname_value', // 真实姓名
	telephone: 'telephone_value', // 联系方式
	student_card_url: 'student_card_url_value', // 学生证图片url
	struts: 1, // 状态（0 未审核  1 已审核  -1 已拒绝）
	reject_reason: 'reject_reason_value', // 拒绝理由
	apply_time: '206.621410147687556-11.203480118848795-8.453024851155618 14.912370438896229:44.670820006483126:23.4030261634722', // 申请时间
	check_time: '207.845817219512123-0.49384841229491716-20.27174194958688 6.4133316428673215:38.17621042277907:54.433448408672334', // 审核时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			applyforknight(id: "some id"){
				id, school_id, knight_id, partner_id, realname, telephone, student_card_url, struts, reject_reason, apply_time, check_time
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
			applyforknightAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, school_id, knight_id, partner_id, realname, telephone, student_card_url, struts, reject_reason, apply_time, check_time
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
			addApplyforknight(applyforknight:${ spread(obj) }){
				id, school_id, knight_id, partner_id, realname, telephone, student_card_url, struts, reject_reason, apply_time, check_time
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
			updateApplyforknight(applyforknight:${ spread(obj) }){
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
			removeApplyforknight(id: "some id"){
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
