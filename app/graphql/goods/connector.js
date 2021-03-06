/** 
 * 模型 Goods 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class GoodsConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Goods;
	}

	// 用于查询单个模型数据的方法
	goods(id) {
		const {ctx} = this;
		const where = {id};
		// 关联商品频道
		const {Goodschannel} = ctx.model;
		const include = [{
			model: Goodschannel,
			// required: true,
		}];
		return this.proxy.findOne({ where, include });
	}

	// 用于查询所有模型数据的方法
	goodsAll(page,order,where) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		// const where = {};
		// 关联商品频道
		const {Goodschannel} = ctx.model;
		const include = [{
			model: Goodschannel,
			// required: true,
		}];
		return this.proxy.findAll({where, include, ...opts });
	}

	// 新增模型的方法
	async addGoods(goods) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,seller_id,dorm_id,channel_id,thumb_url,title,good_type,summary,price,discount_price,priority
				,struts,created,school_id,total_count,sell_count,history_count} = goods;
			id = uuidv1();
			console.log('【add goods】 ： ', goods);
			const goodsInput = await this.proxy.create( _.omitBy({id,seller_id,dorm_id,channel_id,thumb_url,title,good_type
				,summary,price,discount_price,priority,struts,created,school_id,total_count,sell_count,history_count}, _.isNil) );
			return goodsInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add goods】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateGoods(goods) {
		const {ctx} = this;
		const {id,seller_id,dorm_id,channel_id,thumb_url,title,good_type,summary,price,discount_price,
			priority,struts,created,school_id,total_count,sell_count,history_count} = goods;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,seller_id,dorm_id,channel_id,thumb_url,title,
				good_type,summary,price,discount_price,priority,struts,
				created,school_id,total_count,sell_count,history_count}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update goods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeGoods(id) {
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
			console.error('【ERROR delete goods】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = GoodsConnector;
