/** 
 * 模型 Selleradmin 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		selleradmin(root, {id}, ctx){
			return ctx.connector.selleradmin.selleradmin(id);
		},

		// 用于查询所有模型数据的方法
		selleradminAll(root, {page,order}, ctx){
			return ctx.connector.selleradmin.selleradminAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSelleradmin(root, {selleradmin}, ctx){
			return ctx.connector.selleradmin.addSelleradmin(selleradmin);
		},

		// 修改模型的方法
		updateSelleradmin(root, {selleradmin}, ctx){
			return ctx.connector.selleradmin.updateSelleradmin(selleradmin);
		},

		// 删除模型的方法
		removeSelleradmin(root, {id}, ctx){
			return ctx.connector.selleradmin.removeSelleradmin(id);
		},

	}
}
