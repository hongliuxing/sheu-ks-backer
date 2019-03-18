const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	sysuer_id: 'sysuer_id_value', // 后台审核人编号
	telephone: 'telephone_value', // 合伙人编号
	struts: 7, // 状态（0 未审核  1 已审核  -1 已拒绝）
	reject_reason: 'reject_reason_value', // 拒绝理由
	apply_time: '2016.343684265365823-1.254902340530304-17.40410059297563 5.71706643064376:29.837779491494256:48.109355939726235', // 申请时间
	check_time: '204.69784698813378-9.06728138599112-25.530327713307905 12.748192884147809:33.824602598586516:39.77301408935324', // 审核时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			applyforpartner(id: "some id"){
				id, sysuer_id, telephone, struts, reject_reason, apply_time, check_time
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
			applyforpartnerAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, sysuer_id, telephone, struts, reject_reason, apply_time, check_time
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
			addApplyforpartner(applyforpartner:${ spread(obj) }){
				id, sysuer_id, telephone, struts, reject_reason, apply_time, check_time
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
			updateApplyforpartner(applyforpartner:${ spread(obj) }){
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
			removeApplyforpartner(id: "some id"){
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
