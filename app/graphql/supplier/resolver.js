/** 
 * 模型 Supplier 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		supplier(root, {id}, ctx){
			return ctx.connector.supplier.supplier(id);
		},

		// 用于查询所有模型数据的方法
		supplierAll(root, {page,order, where}, ctx){
			return ctx.connector.supplier.supplierAll(page,order, where);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSupplier(root, {supplier}, ctx){
			return ctx.connector.supplier.addSupplier(supplier);
		},

		// 修改模型的方法
		updateSupplier(root, {supplier}, ctx){
			return ctx.connector.supplier.updateSupplier(supplier);
		},

		// 删除模型的方法
		removeSupplier(root, {id}, ctx){
			return ctx.connector.supplier.removeSupplier(id);
		},

	}
}
