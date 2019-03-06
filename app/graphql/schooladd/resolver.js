/** 
 * 模型 Schooladd 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		schooladd(root, {id}, ctx){
			return ctx.connector.schooladd.schooladd(id);
		},

		// 用于查询所有模型数据的方法
		schooladdAll(root, {page,order}, ctx){
			return ctx.connector.schooladd.schooladdAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSchooladd(root, {schooladd}, ctx){
			return ctx.connector.schooladd.addSchooladd(schooladd);
		},

		// 修改模型的方法
		updateSchooladd(root, {schooladd}, ctx){
			return ctx.connector.schooladd.updateSchooladd(schooladd);
		},

		// 删除模型的方法
		removeSchooladd(root, {id}, ctx){
			return ctx.connector.schooladd.removeSchooladd(id);
		},

	}
}
