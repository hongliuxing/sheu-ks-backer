/** 
 * 模型 Goodschannel 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class GoodschannelConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Goodschannel;
	}

	// 用于查询单个模型数据的方法
	goodschannel(id) {
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	async goodschannelAll(school_id) {
		const {ctx} = this;
		// const opts = this.generateQueryOptions({page,order});
		// // const where = {};
		// const sequelize = ctx.app.Sequelize;

		// // delete opts.order;
		// // opts.attributes = ['id', [sequelize.fn('COUNT', sequelize.col('id')),'total']];
		// // opts.group = 'id';

		// const {Goods} = ctx.model;
		// const include = [{
		// 	model: Goods,
		// 	//required: true,
		// 	attributes: ['channel_id', [sequelize.fn('COUNT', sequelize.col('channel_id')),'gcount']],
			
		// }];
		// opts.group = 'goodschannel.channel_id';

		// const goodsChannel = await this.proxy.findAll({where, include, ...opts });

		const goodsChannels = await this.ctx.model.query(
            'CALL proc_goodschannels_query(?)',
			{ replacements: [school_id], 
				// type: this.ctx.model.QueryTypes.RAW, 
				// raw: true 
			},
        );

		console.log('goodsChannel: ', goodsChannels);

		return goodsChannels;
	}

	// 新增模型的方法
	async addGoodschannel(goodschannel) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,seller_id,title,school_id,priority,created} = goodschannel;
			id = uuidv1();
			console.log('【add goodschannel】 ： ', goodschannel);
			const goodschannelInput = await this.proxy.create( _.omitBy({id,seller_id,title,school_id,priority,created}, _.isNil) );
			return goodschannelInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add goodschannel】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateGoodschannel(goodschannel) {
		const {ctx} = this;
		const {id,seller_id,title,school_id,priority,created} = goodschannel;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,seller_id,title,school_id,priority,created}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update goodschannel】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeGoodschannel(id) {
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
			console.error('【ERROR delete goodschannel】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = GoodschannelConnector;
