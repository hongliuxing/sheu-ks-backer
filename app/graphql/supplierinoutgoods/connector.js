/** 
 * 模型 Supplierinoutgoods 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class SupplierinoutgoodsConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Supplierinoutgoods;
	}

	// 用于查询单个模型数据的方法
	supplierinoutgoods(id) {
		const {ctx} = this;
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	supplierinoutgoodsAll(page,order) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		const where = {};
		return this.proxy.findAll({where, ...opts });
	}

	// 新增模型的方法
	async addSupplierinoutgoods(supplierinoutgoods) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,supplier_id,goods_id,partner_id,state,total_count,remark,create_time,modify_time} = supplierinoutgoods;
			id = uuidv1();
			console.log('【add supplierinoutgoods】 ： ', supplierinoutgoods);
			const supplierinoutgoodsInput = await this.proxy.create( _.omitBy({id,supplier_id,goods_id,partner_id,state,total_count,remark,create_time,modify_time}, _.isNil) );
			return supplierinoutgoodsInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add supplierinoutgoods】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateSupplierinoutgoods(supplierinoutgoods) {
		const {ctx} = this;
		const {id,supplier_id,goods_id,partner_id,state,total_count,remark,create_time,modify_time} = supplierinoutgoods;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,supplier_id,goods_id,partner_id,state,total_count,remark,create_time,modify_time}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update supplierinoutgoods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeSupplierinoutgoods(id) {
		const {ctx} = this;
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
			console.error('【ERROR delete supplierinoutgoods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = SupplierinoutgoodsConnector;
