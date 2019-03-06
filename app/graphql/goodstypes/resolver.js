/** 
 * 模型 Goodstypes 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		goodstypes(root, {id}, ctx){
			return ctx.connector.goodstypes.goodstypes(id);
		},

		// 用于查询所有模型数据的方法
		goodstypesAll(root, {page,order}, ctx){
			return ctx.connector.goodstypes.goodstypesAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addGoodstypes(root, {goodstypes}, ctx){
			return ctx.connector.goodstypes.addGoodstypes(goodstypes);
		},

		// 修改模型的方法
		updateGoodstypes(root, {goodstypes}, ctx){
			return ctx.connector.goodstypes.updateGoodstypes(goodstypes);
		},

		// 删除模型的方法
		removeGoodstypes(root, {id}, ctx){
			return ctx.connector.goodstypes.removeGoodstypes(id);
		},

	}
}
