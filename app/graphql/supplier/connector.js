/** 
 * 模型 Supplier 的 Graphql 解析器 
*/
const uuidv1 = require('uuid/v1');
const DataLoader = require('dataloader');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class SupplierConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Supplier;
	}

	// 用于查询单个模型数据的方法
	supplier(id) {
		const {ctx} = this;
		const where = {id};
		const {Dormitory, Dormitorysupplierrelation} = ctx.model;
		const include = [{
			model: Dormitorysupplierrelation,
			required: true,
			include: [Dormitory],
		}];
		return this.proxy.findOne({ where, include });
	}

	// 用于查询所有模型数据的方法
	supplierAll(page,order, where) {
		const {ctx} = this;
		const {Dormitory, Dormitorysupplierrelation} = ctx.model;
		const include = [{
			model: Dormitorysupplierrelation,
			required: true,
			include: [Dormitory],
		}];
		const opts = this.generateQueryOptions({page,order});
		// const where = {};
		return this.proxy.findAll({where, include, ...opts });
	}

	// 新增模型的方法
	async addSupplier(supplier) {
		// 启动一个事务
		const {ctx} = this;
		const transaction = await ctx.model.transaction();

		try{
			const {unionid,openid,nickname,realname,phone_num,type,sex,logo_url,notice,
				business_status,business_start,business_end,express_fee,min_amount,school_id, address, 
				dormitorysupplierrelation, // 添加供应商时添加宿舍楼关系
			} = supplier;
			
			// 1. 添加供应商信息数据
			const id = uuidv1();
			console.log('【addSupplier】 ： ', supplier);
			const supplierInput = await this.proxy.create( _.omitBy({id,unionid,openid,nickname,realname,phone_num,type,sex,logo_url,
				notice,business_status,business_start,business_end,express_fee,min_amount,school_id,address
				}, _.isNil), { transaction }
			);
			// 2. 添加供应商-宿舍楼关系关联数据
			const dsr = await ctx.model.Dormitorysupplierrelation.create({
				id: uuidv1(),
				dorm_id: dormitorysupplierrelation.dorm_id,
				suppli_id: supplierInput.id
			}, { transaction });

			// 提交执行结果
			await transaction.commit();
			supplierInput.dormitorysupplierrelation = dsr;
			return supplierInput;
		}catch(error){
			await transaction.rollback();
			const error_msg = new Message({err: ErrorType.TRANS_ROLLBACK, desc: '数据库事务回滚'});
			console.error('【ERROR addSupplier】： ', error_msg);
			ctx.logger.error(error_msg);
			return error_msg;
		}
	}

	// 修改模型的方法
	async updateSupplier(supplier) {
		const {ctx} = this;
		const {id,unionid,openid,nickname,realname,phone_num,type,sex,logo_url,notice,business_status,
			business_start,business_end,express_fee,min_amount,school_id, address, 
			dormitorysupplierrelation} = supplier;
		console.log('【updateSupplier】 ： ', supplier);
		let msg = null, result = -1;
		try{
			// 1. 更新 供应商数据
			result = await this.proxy.update( _.omitBy({id,unionid,openid,nickname,realname,phone_num,type,sex,logo_url,
				notice,business_status,business_start,business_end,express_fee,min_amount,school_id, address}, _.isNil) 
				, { where: {id} });
			let affected_rows_count = result[0];
			if(dormitorysupplierrelation){
				// 2. 更新 供应商-宿舍-关系表 数据
				const {Dormitorysupplierrelation} = ctx.app.model;
				result = await Dormitorysupplierrelation.update({
					dorm_id: dormitorysupplierrelation.dorm_id,
				}, {where: {id: dormitorysupplierrelation.id}});
				// 累加更新影响条目
				affected_rows_count += result[0];
			}

			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			console.error('【ERROR updateSupplier】： ', err);
			ctx.logger.error(err);
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
		}
		return msg;
	}

	// 删除模型的方法
	async removeSupplier(id) {
		let msg = null, result = -1;
		try{
			result = await this.proxy.destroy({where: {id}});
			const affected_rows_count = result;
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "删除成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "删除未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
		}
		return msg;
	}

}
module.exports = SupplierConnector;
