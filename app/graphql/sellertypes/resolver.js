/** 
 * 模型 Sellertypes 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		sellertypes(root, {id}, ctx){
			return ctx.connector.sellertypes.sellertypes(id);
		},

		// 用于查询所有模型数据的方法
		sellertypesAll(root, {page,order}, ctx){
			return ctx.connector.sellertypes.sellertypesAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSellertypes(root, {sellertypes}, ctx){
			return ctx.connector.sellertypes.addSellertypes(sellertypes);
		},

		// 修改模型的方法
		updateSellertypes(root, {sellertypes}, ctx){
			return ctx.connector.sellertypes.updateSellertypes(sellertypes);
		},

		// 删除模型的方法
		removeSellertypes(root, {id}, ctx){
			return ctx.connector.sellertypes.removeSellertypes(id);
		},

	}
}
