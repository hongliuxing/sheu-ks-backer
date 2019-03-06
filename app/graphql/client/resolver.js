/** 
 * 模型 Client 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		client(root, {id}, ctx){
			return ctx.connector.client.client(id);
		},

		// 用于查询所有模型数据的方法
		clientAll(root, {page,order}, ctx){
			return ctx.connector.client.clientAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addClient(root, {client}, ctx){
			return ctx.connector.client.addClient(client);
		},

		// 修改模型的方法
		updateClient(root, {client}, ctx){
			return ctx.connector.client.updateClient(client);
		},

		// 删除模型的方法
		removeClient(root, {id}, ctx){
			return ctx.connector.client.removeClient(id);
		},

	}
}
