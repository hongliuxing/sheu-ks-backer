/** 
 * 模型 RushActivity 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class RushActivityConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.RushActivity;
	}

	// 用于查询单个模型数据的方法
	rushActivity(id) {
		const {ctx} = this;
		const where = {id};
		return this.proxy.findOne({ where });
	}

	// 用于查询所有模型数据的方法
	async rushActivityAll(school_id,struts_show=null) {
		const {ctx} = this;
		const rushActivities = await ctx.model.query(
            'CALL proc_rushActivities_query(?,?)',
			{ replacements: [school_id,struts_show],  },
        );
		return rushActivities;
	}

	// 新增模型的方法
	async addRushActivity(rushActivity) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			let {id,school_id,partner_id,title,logo_url,struts_show,begin_show,end_show,begin_rush,end_rush,createAt} = rushActivity;
			id = uuidv1();
			console.log('【add rushActivity】 ： ', rushActivity);
			const rushActivityInput = await this.proxy.create( _.omitBy({id,school_id,partner_id,title,logo_url,struts_show,begin_show,end_show,begin_rush,end_rush,createAt}, _.isNil) );
			return rushActivityInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add rushActivity】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateRushActivity(rushActivity) {
		const {ctx} = this;
		const {id,school_id,partner_id,title,logo_url,struts_show,begin_show,end_show,begin_rush,end_rush,createAt} = rushActivity;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,school_id,partner_id,title,logo_url,struts_show,begin_show,end_show,begin_rush,end_rush,createAt}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update rushActivity】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeRushActivity(id) {
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
			console.error('【ERROR delete rushActivity】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = RushActivityConnector;
