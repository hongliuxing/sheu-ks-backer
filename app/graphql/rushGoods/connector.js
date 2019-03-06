/** 
 * 模型 RushGoods 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const util = require('util');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class RushGoodsConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.RushGoods;
	}

	// 用于查询单个模型数据的方法
	rushGoods(id) {
		const {ctx} = this;
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	rushGoodsAll(page,order,where) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		// const where = {};
		return this.proxy.findAll({where, ...opts });
	}

	/**
	 * 筛选爆款活动商品
	 * @param {*} activity_id 
	 * @param {*} school_id 
	 * @param {*} own 
	 */
	async screenRushGoods(activity_id, school_id, own) {
		const {ctx} = this;
		try{
			const RushGoodses = await ctx.model.query(
				'CALL proc_screen_rushGoods(?,?,?);', 
				{
					// nest: true, 
					replacements: [activity_id, school_id, own],
					// raw: false,
					// nest: true, raw: true
					// type : ctx.model.QueryTypes.SELECT
					// model: ctx.model.Goods,
				},
			);
			console.log('screenRushGoods SUCCESS => ', util.inspect(RushGoodses, true, 3));
			return RushGoodses;
		}catch(err) {
			console.log('screenRushGoods ERROR => ', err);
			return [];
		}
	}

	// 新增模型的方法
	async addRushGoods(rushGoods) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,activity_id,goods_id,struts,createAt,updateAt} = rushGoods;
			id = uuidv1();
			console.log('【add rushGoods】 ： ', rushGoods);
			const rushGoodsInput = await this.proxy.create( _.omitBy({id,activity_id,goods_id,struts,createAt,updateAt}, _.isNil) );
			return rushGoodsInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add rushGoods】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateRushGoods(rushGoods) {
		const {ctx} = this;
		const {id,activity_id,goods_id,struts,createAt,updateAt} = rushGoods;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,activity_id,goods_id,struts,createAt,updateAt}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update rushGoods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeRushGoods(id) {
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
			console.error('【ERROR delete rushGoods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	/**
	 * 变更商品的活动参与状态
	 * @param {*} activity_id 
	 * @param {*} goods_id 
	 * @param {*} is_own_activity 
	 */
	async changePartRushGoods(activity_id, goods_id, is_own_activity) {
		const {ctx} = this;
		let msg = null, result = -1;
		try{
			if(is_own_activity === true){
				// is_own_activity 是当前的活动商品, 则进行删除操作
				result = await this.proxy.destroy({where: {activity_id, goods_id}});
				const affected_rows_count = result;
				if (affected_rows_count > 0)
					msg = new Message({err: null, desc: "删除成功!", data: affected_rows_count});
				else
					msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "删除未影响任何数据!", data: affected_rows_count});
			}else{
				// is_own_activity 不是当前的活动商品, 则新增活动商品关系数据[ rushGoods ]
				const rushGoods = {
					id: uuidv1(), activity_id, goods_id, struts: 1,
				};
				const rushGoodsInput = await this.proxy.create( rushGoods );
				if(rushGoodsInput){
					msg = new Message({err: null, desc: "新增关联成功!", data: rushGoodsInput});
				}else{
					msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "移除关联数据失败!", data: rushGoodsInput});
				}
				return msg;
			}
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR changePart rushGoods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = RushGoodsConnector;
