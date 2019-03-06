/** 
 * 模型 Ordergoodsrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		ordergoodsrelation(root, {id}, ctx){
			return ctx.connector.ordergoodsrelation.ordergoodsrelation(id);
		},

		// 用于查询所有模型数据的方法
		ordergoodsrelationAll(root, {page,order}, ctx){
			return ctx.connector.ordergoodsrelation.ordergoodsrelationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addOrdergoodsrelation(root, {ordergoodsrelation}, ctx){
			return ctx.connector.ordergoodsrelation.addOrdergoodsrelation(ordergoodsrelation);
		},

		// 修改模型的方法
		updateOrdergoodsrelation(root, {ordergoodsrelation}, ctx){
			return ctx.connector.ordergoodsrelation.updateOrdergoodsrelation(ordergoodsrelation);
		},

		// 删除模型的方法
		removeOrdergoodsrelation(root, {id}, ctx){
			return ctx.connector.ordergoodsrelation.removeOrdergoodsrelation(id);
		},

	}
}
