/** 
 * 模型 Orderstruts 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class OrderstrutsConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Orderstruts;
	}

	// 用于查询单个模型数据的方法
	orderstruts(id) {
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	orderstrutsAll(page,order) {
		const opts = this.generateQueryOptions({page,order});
		const where = {};
		return this.proxy.findAll({where, ...opts });
	}

	// 新增模型的方法
	async addOrderstruts(orderstruts) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			const {id,out_trade_no,status,prev_status,prepay_time,prepay_fail_time,pay_time,pay_fail_time,client_receive_fail_time,client_receive_fail_reason,seller_receive_time,seller_receive_fail_time,seller_receive_fail_reason,knight_receive_time,knight_finish_time,client_refund_time,client_refund_reason,seller_refund_time,refund_finish_time,created,modify_time} = orderstruts;
			id = uuidv1();
			console.log('【add orderstruts】 ： ', orderstruts);
			const orderstrutsInput = await this.proxy.create( _.omitBy({id,out_trade_no,status,prev_status,prepay_time,prepay_fail_time,pay_time,pay_fail_time,client_receive_fail_time,client_receive_fail_reason,seller_receive_time,seller_receive_fail_time,seller_receive_fail_reason,knight_receive_time,knight_finish_time,client_refund_time,client_refund_reason,seller_refund_time,refund_finish_time,created,modify_time}, _.isNil) );
			return orderstrutsInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add orderstruts】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateOrderstruts(orderstruts) {
		const {ctx} = this;
		const {id,out_trade_no,status,prev_status,prepay_time,prepay_fail_time,pay_time,pay_fail_time,client_receive_fail_time,client_receive_fail_reason,seller_receive_time,seller_receive_fail_time,seller_receive_fail_reason,knight_receive_time,knight_finish_time,client_refund_time,client_refund_reason,seller_refund_time,refund_finish_time,created,modify_time} = orderstruts;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,out_trade_no,status,prev_status,prepay_time,prepay_fail_time,pay_time,pay_fail_time,client_receive_fail_time,client_receive_fail_reason,seller_receive_time,seller_receive_fail_time,seller_receive_fail_reason,knight_receive_time,knight_finish_time,client_refund_time,client_refund_reason,seller_refund_time,refund_finish_time,created,modify_time}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update orderstruts】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeOrderstruts(id) {
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
			console.error('【ERROR delete orderstruts】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = OrderstrutsConnector;
