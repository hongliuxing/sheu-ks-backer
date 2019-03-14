/** 
 * 模型 Goodssupplierrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		goodssupplierrelation(root, {goods_id, supplier_id}, ctx){
			return ctx.connector.goodssupplierrelation.goodssupplierrelation(goods_id, supplier_id);
		},

		// 用于查询所有模型数据的方法
		goodssupplierrelationAll(root, {page,order,where}, ctx){
			return ctx.connector.goodssupplierrelation.goodssupplierrelationAll(page,order,where);
		},

		// 用于查询所有模型数据的方法
		goodssupplierrelationRemainingAll(root, {page,order,supplier_id,channel_id}, ctx){
			return ctx.connector.goodssupplierrelation.goodssupplierrelationRemainingAll(page,order,supplier_id,channel_id);
		},

	},
	Mutation: {
		// 新增模型的方法
		addGoodssupplierrelation(root, {goodssupplierrelation}, ctx){
			return ctx.connector.goodssupplierrelation.addGoodssupplierrelation(goodssupplierrelation);
		},

		// 修改模型的方法
		updateGoodssupplierrelation(root, {goodssupplierrelation}, ctx){
			return ctx.connector.goodssupplierrelation.updateGoodssupplierrelation(goodssupplierrelation);
		},

		// 删除模型的方法
		removeGoodssupplierrelation(root, {id}, ctx){
			return ctx.connector.goodssupplierrelation.removeGoodssupplierrelation(id);
		},

	}
}
