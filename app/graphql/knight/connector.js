/** 
 * 模型 Knight 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class KnightConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Knight;
	}

	// 用于查询单个模型数据的方法
	knight(id) {
		const {ctx} = this;
		const where = {id};
		// 关联宿舍楼表
		const {Dormitory} = ctx.model;
		const include = [{
			model: Dormitory,
			required: true,
		}];
		return this.proxy.findOne({ where,include });
	}

	// 用于查询所有模型数据的方法
	async knightAll(page,order,where) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		// 关联宿舍楼表
		const {Dormitory} = ctx.model;
		const include = [{
			model: Dormitory,
			required: true,
		}];
		// const where = {};
		const knights = await this.proxy.findAll({where, include, ...opts });
		console.log('【knights queryAll】=> ', knights);
		return knights;
	}

	// 根据条件筛选查询爆款活动的骑士
	async screenRushKnightAll(where) {
		const {ctx} = this;
		// const opts = this.generateQueryOptions({page,order});
		const {activity_id, dorm_id} = where;
		const rushKnights = await ctx.model.query(
            'CALL proc_screen_rushKnight(?,?)',
			{ 
				replacements: [activity_id, dorm_id],
				// raw: true,
				// type: ctx.model.QueryTypes.RAW,
				// nest: false,
			},
		);
		console.log('【rushKnights】 => ', rushKnights);
		return rushKnights;
	}

	// 新增模型的方法
	async addKnight(knight) {
		const {ctx} = this;
		// 开启一个事务
		// const transaction = await ctx.model.transaction();
		try{
			const {unionid,openid,nickname,realname,person_id,telephone,logo_url,school_id,gender,struts,created,dorm_id} = knight;
			// 自动生成id待修缮, const 无法重复赋值
			const id = uuidv1();
			console.log('【add knight】 ： ', knight);
			const knightInput = await this.proxy.create( _.omitBy({id,unionid,openid,nickname,realname,person_id,
				telephone,logo_url,school_id,gender,struts,created,dorm_id}, _.isNil) );
			return knightInput;
		}catch(err) {
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add knight】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateKnight(knight) {
		const {ctx} = this;
		const {id,unionid,openid,nickname,realname,person_id,telephone,logo_url,school_id,gender,struts,created,dorm_id} = knight;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( _.omitBy({id,unionid,openid,nickname,realname,person_id,telephone,
				logo_url,school_id,gender,struts,created,dorm_id}, _.isNil) , { where: {id} });
			const affected_rows_count = result[0];
			if (affected_rows_count > 0)
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
			else
				msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
		}catch(err) {
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update knight】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeKnight(id) {
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
			console.error('【ERROR delete knight】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = KnightConnector;
