/** 
 * 模型 Order 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		order(root, {id}, ctx){
			return ctx.connector.order.order(id);
		},

		// 用于查询所有模型数据的方法
		orderAll(root, {page,order}, ctx){
			return ctx.connector.order.orderAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addOrder(root, {order}, ctx){
			return ctx.connector.order.addOrder(order);
		},

		// 修改模型的方法
		updateOrder(root, {order}, ctx){
			return ctx.connector.order.updateOrder(order);
		},

		// 删除模型的方法
		removeOrder(root, {id}, ctx){
			return ctx.connector.order.removeOrder(id);
		},

	}
}
