/** 
 * 模型 Dormgoodsrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		dormgoodsrelation(root, {id}, ctx){
			return ctx.connector.dormgoodsrelation.dormgoodsrelation(id);
		},

		// 用于查询所有模型数据的方法
		dormgoodsrelationAll(root, {page,order}, ctx){
			return ctx.connector.dormgoodsrelation.dormgoodsrelationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addDormgoodsrelation(root, {dormgoodsrelation}, ctx){
			return ctx.connector.dormgoodsrelation.addDormgoodsrelation(dormgoodsrelation);
		},

		// 修改模型的方法
		updateDormgoodsrelation(root, {dormgoodsrelation}, ctx){
			return ctx.connector.dormgoodsrelation.updateDormgoodsrelation(dormgoodsrelation);
		},

		// 删除模型的方法
		removeDormgoodsrelation(root, {id}, ctx){
			return ctx.connector.dormgoodsrelation.removeDormgoodsrelation(id);
		},

	}
}
