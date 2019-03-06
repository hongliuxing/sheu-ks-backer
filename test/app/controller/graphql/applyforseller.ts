const uuidv1 = require('uuid/v1');
const util = require('util');
import * as httpUtil from '../utils/base';
import {spread} from '../utils/gql-util';

const obj = {
	id: uuidv1(), // 编号
	school_id: 'school_id_value', // 学校编号
	seller_admin_id: 'seller_admin_id_value', // 商家负责人编号(ObjectId)
	partner_id: 'partner_id_value', // (校园)审核人编号(ObjectId)
	btype: 'btype_value', // 营业类型名称( 个体运营商/其他经营模式 )
	sellerName: 'sellerName_value', // 商铺名称
	sellerType: 'sellerType_value', // 商铺类型(餐饮/零售)
	legal_person: 'legal_person_value', // 法人
	telephone: 'telephone_value', // 联系方式
	license_url: 'license_url_value', // 营业执照url
	struts: 1, // 状态（0 未审核  1 已审核  -1 已拒绝）
	reject_reason: 'reject_reason_value', // 拒绝理由
	apply_time: '2014.06745420954596-9.449788930125623-17.479080991645077 14.91050922269097:54.16035767462799:20.046011519990564', // 申请时间
	check_time: '204.906084925518339-6.447363661712863-22.45720790450379 17.428545242376792:25.54825903968466:24.835236071817377', // 审核时间
};

export const find = async () => {
	it('should HTTP /find', async () => {
		const q1 = `query={
			applyforseller(id: "some id"){
				id, school_id, seller_admin_id, partner_id, btype, sellerName, sellerType, legal_person, telephone, license_url, struts, reject_reason, apply_time, check_time
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
			applyforsellerAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, school_id, seller_admin_id, partner_id, btype, sellerName, sellerType, legal_person, telephone, license_url, struts, reject_reason, apply_time, check_time
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
			addApplyforseller(applyforseller:${ spread(obj) }){
				id, school_id, seller_admin_id, partner_id, btype, sellerName, sellerType, legal_person, telephone, license_url, struts, reject_reason, apply_time, check_time
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
			updateApplyforseller(applyforseller:${ spread(obj) }){
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
			removeApplyforseller(id: "some id"){
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
