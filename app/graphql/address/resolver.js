/** 
 * 模型 Address 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		address(root, {id}, ctx){
			return ctx.connector.address.address(id);
		},

		// 用于查询所有模型数据的方法
		addressAll(root, {page,order}, ctx){
			return ctx.connector.address.addressAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addAddress(root, {address}, ctx){
			return ctx.connector.address.addAddress(address);
		},

		// 修改模型的方法
		updateAddress(root, {address}, ctx){
			return ctx.connector.address.updateAddress(address);
		},

		// 删除模型的方法
		removeAddress(root, {id}, ctx){
			return ctx.connector.address.removeAddress(id);
		},

	}
}
