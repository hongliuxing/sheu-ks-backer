/** 
 * 模型 Orderstruts 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		orderstruts(root, {id}, ctx){
			return ctx.connector.orderstruts.orderstruts(id);
		},

		// 用于查询所有模型数据的方法
		orderstrutsAll(root, {page,order}, ctx){
			return ctx.connector.orderstruts.orderstrutsAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addOrderstruts(root, {orderstruts}, ctx){
			return ctx.connector.orderstruts.addOrderstruts(orderstruts);
		},

		// 修改模型的方法
		updateOrderstruts(root, {orderstruts}, ctx){
			return ctx.connector.orderstruts.updateOrderstruts(orderstruts);
		},

		// 删除模型的方法
		removeOrderstruts(root, {id}, ctx){
			return ctx.connector.orderstruts.removeOrderstruts(id);
		},

	}
}
