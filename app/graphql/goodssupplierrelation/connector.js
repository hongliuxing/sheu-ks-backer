/** 
 * 模型 Goodssupplierrelation 的 Graphql 解析器 
*/

const DataLoader = require('dataloader');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const BaseConnector = require('../common/connector');

const msgger = require('../../utils/message-gql');

const Message = msgger.default;

const ErrorType = msgger.ErrorType;

class GoodssupplierrelationConnector extends BaseConnector {
	constructor(ctx) {
		super(ctx);
		this.proxy = ctx.app.model.Goodssupplierrelation;
	}

	// 用于查询单个模型数据的方法
	goodssupplierrelation(goods_id, supplier_id) {
		const {ctx} = this;
		const where = {goods_id, supplier_id};
		const {Supplier, Goods, Goodschannel} = ctx.model;
		const include = [{
			model: Supplier,
			required: true,
		},{
			model: Goods, required: true, as: 'goods', 
			include: [Goodschannel]
		}];
		return this.proxy.findOne({ where, include });
	}

	// 用于查询所有模型数据的方法
	goodssupplierrelationAll(page,order,where) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		const goodsWhere = where.goods || {};
		if(goodsWhere){
			delete where.goods;
		}
		// const where = {};
		const {Supplier, Goods, Goodschannel} = ctx.model;
		const include = [{
			model: Supplier,
			required: true,
		},{
			model: Goods, required: true, as: 'goods', where : goodsWhere, 
			include: [Goodschannel]
		}];
		return this.proxy.findAll({where, include, ...opts });
	}

	/**
	 * 用于查询所有模型数据的方法
	 * @param {*} page 
	 * @param {*} order 
	 * @param {*} where 
	 */
	async goodssupplierrelationRemainingAll(page,order,supplier_id,channel_id) {
		const {ctx} = this;
		const opts = this.generateQueryOptions({page,order});
		// const goodsWhere = where.goods || {};
		// if(goodsWhere){
		// 	delete where.goods;
		// }
		// const where = {};
		const { Goods, Goodschannel, Goodssupplierrelation} = ctx.model;
		const where = {
			id: {
				$notIn: await Goodssupplierrelation.findAll({
					attributes: ['goods_id'],
					where: {supplier_id}, 
				}).map(el => el.goods_id),
			},
			channel_id,
		};
		const include = [{
			model: Goodschannel, required: true,
		}];
		return Goods.findAll({where, include, ...opts});
	}

	// 新增模型的方法
	async addGoodssupplierrelation(goodssupplierrelation) {
		const {ctx} = this;
		// 开启一个事务
		const transaction = await ctx.model.transaction();
		try{
			let {id,goods_id,supplier_id,current_count,seller_count,modify_time,create_time
				,replen_count
			} = goodssupplierrelation;
			id = uuidv1();
			if(seller_count == null){
				seller_count = 0;
			}
			console.log('【add goodssupplierrelation】 ： ', goodssupplierrelation);
			const goodssupplierrelationInput = await this.proxy.create( 
				_.omitBy({id,goods_id,supplier_id,current_count,seller_count,modify_time,create_time}, _.isNil), 
				{ transaction } 
			);
			//
			const { Dormitorysupplierrelation, Dormgoodsrelation } = ctx.model;
			const dormSupplierRel = await Dormitorysupplierrelation.findOne({
				where: {
					suppli_id: supplier_id
				}
			});
			console.log('==========================> 宿舍楼: ', dormSupplierRel.dorm_id);
			if(dormSupplierRel.dorm_id && goods_id){
				const dorm_goods = await Dormgoodsrelation.findOne({
					where: {
						goods_id, 
						dorm_id: dormSupplierRel.dorm_id,
					}
				});
				let result = null;
				if(null == dorm_goods){
					console.log('replen_count 新增 补货量: ', replen_count);
					result = await Dormgoodsrelation.create({
						id: uuidv1(), 
						dorm_id: dormSupplierRel.dorm_id, 
						goods_id, total_count: current_count, seller_count: 0, 
					}, {transaction});
				}else{
					console.log('replen_count 修改 补货量: ', replen_count);
					result = await Dormgoodsrelation.update({
						total_count: dorm_goods.total_count + replen_count
					}, {where: {
						dorm_id: dormSupplierRel.dorm_id, 
						goods_id,
					}, transaction});
				}
				// 提交执行结果
				await transaction.commit();
				return result;
			}else{
				return await transaction.rollback();
			}
			
			
			
			// return goodssupplierrelationInput;
		}catch(err) {
			await transaction.rollback();
			const msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR add goodssupplierrelation】： ', msg);
			ctx.logger.error(msg);
			return msg;
		}
	}

	// 修改模型的方法
	async updateGoodssupplierrelation(goodssupplierrelation) {
		const {ctx} = this;
		// 开启一个事务
		const transaction = await ctx.model.transaction();
		const {id,goods_id,supplier_id,current_count,seller_count,modify_time,create_time,replen_count} = goodssupplierrelation;
		let msg = null, result = -1;
		try{
			result = await this.proxy.update( 
				_.omitBy({id,goods_id,supplier_id,current_count,seller_count,modify_time,create_time}, _.isNil) 
				, { where: {goods_id, supplier_id}, transaction });
			const affected_rows_count = result[0];

			//
			const { Dormitorysupplierrelation, Dormgoodsrelation } = ctx.model;
			const dormSupplierRel = await Dormitorysupplierrelation.findOne({
				where: {
					suppli_id: supplier_id
				}
			});
			const dorm_goods = await Dormgoodsrelation.findOne({
				where: {
					goods_id, 
					dorm_id: dormSupplierRel.dorm_id,
				}
			});

			console.log('dorm_goods.total_count: ', dorm_goods.total_count);
			console.log('current_count: ', current_count);
			console.log('dormSupplierRel: ', dormSupplierRel);
			console.log('replen_count 补货量: ', replen_count);

			await Dormgoodsrelation.update({
				total_count: dorm_goods.total_count + replen_count
			}, {where: {
				dorm_id: dormSupplierRel.dorm_id, 
				goods_id,
			}, transaction});


			// if (affected_rows_count > 0){
				msg = new Message({err: null, desc: "更新成功!", data: affected_rows_count});
				// 提交执行结果
				await transaction.commit();
				return msg;
			// }else{
			// 	msg = new Message({err: ErrorType.DB_NO_UPDATED, desc: "更新未影响任何数据!", data: affected_rows_count});
			// 	// 提交执行结果
			// 	await transaction.rollback();
			// }
		}catch(err) {
			await transaction.rollback();
			msg = new Message({err: ErrorType.DATABASE_ERROR, desc: err});
			console.error('【ERROR update goodssupplierrelation】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

	// 删除模型的方法
	async removeGoodssupplierrelation(id) {
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
			console.error('【ERROR delete goodssupplierrelation】： ', msg);
			ctx.logger.error(msg);
		}
		return msg;
	}

}
module.exports = GoodssupplierrelationConnector;
