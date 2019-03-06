/** 
 * 模型 Sellertypesrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		sellertypesrelation(root, {id}, ctx){
			return ctx.connector.sellertypesrelation.sellertypesrelation(id);
		},

		// 用于查询所有模型数据的方法
		sellertypesrelationAll(root, {page,order}, ctx){
			return ctx.connector.sellertypesrelation.sellertypesrelationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSellertypesrelation(root, {sellertypesrelation}, ctx){
			return ctx.connector.sellertypesrelation.addSellertypesrelation(sellertypesrelation);
		},

		// 修改模型的方法
		updateSellertypesrelation(root, {sellertypesrelation}, ctx){
			return ctx.connector.sellertypesrelation.updateSellertypesrelation(sellertypesrelation);
		},

		// 删除模型的方法
		removeSellertypesrelation(root, {id}, ctx){
			return ctx.connector.sellertypesrelation.removeSellertypesrelation(id);
		},

	}
}
