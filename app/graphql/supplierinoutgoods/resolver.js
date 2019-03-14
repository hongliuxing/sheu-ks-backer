/** 
 * 模型 Supplierinoutgoods 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		supplierinoutgoods(root, {id}, ctx){
			return ctx.connector.supplierinoutgoods.supplierinoutgoods(id);
		},

		// 用于查询所有模型数据的方法
		supplierinoutgoodsAll(root, {page,order}, ctx){
			return ctx.connector.supplierinoutgoods.supplierinoutgoodsAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSupplierinoutgoods(root, {supplierinoutgoods}, ctx){
			return ctx.connector.supplierinoutgoods.addSupplierinoutgoods(supplierinoutgoods);
		},

		// 修改模型的方法
		updateSupplierinoutgoods(root, {supplierinoutgoods}, ctx){
			return ctx.connector.supplierinoutgoods.updateSupplierinoutgoods(supplierinoutgoods);
		},

		// 删除模型的方法
		removeSupplierinoutgoods(root, {id}, ctx){
			return ctx.connector.supplierinoutgoods.removeSupplierinoutgoods(id);
		},

	}
}
