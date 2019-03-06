/** 
 * 模型 Seller 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		seller(root, {id}, ctx){
			return ctx.connector.seller.seller(id);
		},

		// 用于查询所有模型数据的方法
		sellerAll(root, {page,order,where}, ctx){
			return ctx.connector.seller.sellerAll(page,order,where);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSeller(root, {seller}, ctx){
			return ctx.connector.seller.addSeller(seller);
		},

		// 修改模型的方法
		updateSeller(root, {seller}, ctx){
			return ctx.connector.seller.updateSeller(seller);
		},

		// 删除模型的方法
		removeSeller(root, {id}, ctx){
			return ctx.connector.seller.removeSeller(id);
		},

	}
}
