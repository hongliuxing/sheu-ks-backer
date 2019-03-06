/** 
 * 模型 Goodstypesrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		goodstypesrelation(root, {id}, ctx){
			return ctx.connector.goodstypesrelation.goodstypesrelation(id);
		},

		// 用于查询所有模型数据的方法
		goodstypesrelationAll(root, {page,order}, ctx){
			return ctx.connector.goodstypesrelation.goodstypesrelationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addGoodstypesrelation(root, {goodstypesrelation}, ctx){
			return ctx.connector.goodstypesrelation.addGoodstypesrelation(goodstypesrelation);
		},

		// 修改模型的方法
		updateGoodstypesrelation(root, {goodstypesrelation}, ctx){
			return ctx.connector.goodstypesrelation.updateGoodstypesrelation(goodstypesrelation);
		},

		// 删除模型的方法
		removeGoodstypesrelation(root, {id}, ctx){
			return ctx.connector.goodstypesrelation.removeGoodstypesrelation(id);
		},

	}
}
