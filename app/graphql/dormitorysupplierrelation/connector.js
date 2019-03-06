/** 
 * 模型 Dormitorysupplierrelation 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class DormitorysupplierrelationConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Dormitorysupplierrelation;
	}

	// 用于查询单个模型数据的方法
	dormitorysupplierrelation(id) {
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	dormitorysupplierrelationAll(page,order) {
		const opts = this.generateQueryOptions({page,order});
		const where = {};
		return this.proxy.findAll({where, ...opts });
	}

	// 新增模型的方法
	async addDormitorysupplierrelation(dormitorysupplierrelation) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			const {id,dorm_id,suppli_id} = dormitorysupplierrelation;
			id = uuidv1();
			console.log('【add dormitorysupplierrelation】 ： ', dormitorysupplierrelation);
			const dormitorysupplierrelationInput = await this.proxy.create( _.omitBy({id,dorm_id,suppli_id}, _.isNil) );
			return dormitorysupplierrelationInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add dormitorysupplierrelation】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateDormitorysupplierrelation(dormitorysupplierrelation) {
		const {ctx} = this;
		const {id,dorm_id,suppli_id} = dormitorysupplierrelation;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,dorm_id,suppli_id}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update dormitorysupplierrelation】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeDormitorysupplierrelation(id) {
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
			console.error('【ERROR delete dormitorysupplierrelation】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = DormitorysupplierrelationConnector;
