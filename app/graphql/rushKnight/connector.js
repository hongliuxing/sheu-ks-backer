/** 
 * 模型 RushKnight 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class RushKnightConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.RushKnight;
	}

	// 用于查询单个模型数据的方法
	rushKnight(id) {
		const {ctx} = this;
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	rushKnightAll(page,order,where) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		// 关联宿舍楼表
		const {Knight, Dormitory} = ctx.model;
		const include = [{
			model: Knight,
			required: true,
			include: [Dormitory]
		}];
		return this.proxy.findAll({where, include, ...opts });
	}

	// 新增模型的方法
	async addRushKnight(rushKnight) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,activity_id,knight_id,predict_order_count,done_order_count,goods_stat,createAt} = rushKnight;
			id = uuidv1();
			console.log('【add rushKnight】 ： ', rushKnight);
			const rushKnightInput = await this.proxy.create( _.omitBy({id,activity_id,knight_id,predict_order_count,done_order_count,goods_stat,createAt}, _.isNil) );
			return rushKnightInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add rushKnight】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateRushKnight(rushKnight) {
		const {ctx} = this;
		const {id,activity_id,knight_id,predict_order_count,done_order_count,goods_stat,createAt} = rushKnight;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,activity_id,knight_id,predict_order_count,done_order_count,goods_stat,createAt}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update rushKnight】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeRushKnight(id) {
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
			console.error('【ERROR delete rushKnight】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	/**
	 * 修改当前骑士对于活动的参与
	 * @param {*} knight_id 
	 * @param {*} activity_id 
	 * @param {*} exec 
	 */
	async changePart(knight_id, activity_id, exec) {
		const {ctx} = this;
		let msg = null, result = -1;
		try{
			if(exec){
				// 已经存在的活动骑士,则删除
				result = await this.proxy.destroy({where: {
					activity_id, knight_id
				}});
				const affected_rows_count = result;
				if (affected_rows_count > 0)
					msg = new Message({err: null, desc: "删除成功!", data: affected_rows_count});
				else
					msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "删除未影响任何数据!", data: affected_rows_count});
			}else{
				// 不存在于该活动的骑士, 则进行添加操作
				const rushKnight = {
					id: uuidv1(), activity_id, knight_id, 
					predict_order_count: 0,
					done_order_count: 0,
				}
				const rushKnightInput = await this.proxy.create( rushKnight );
				if(rushKnightInput != null){
					msg = new Message({err: null, desc: "添加成功!", data: rushKnightInput});
				}else{
					msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "添加时发生异常!", data: rushKnightInput});
				}
			}
			
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR delete rushKnight】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = RushKnightConnector;
