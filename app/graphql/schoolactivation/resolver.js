/** 
 * 模型 Schoolactivation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		schoolactivation(root, {id}, ctx){
			return ctx.connector.schoolactivation.schoolactivation(id);
		},

		// 用于查询所有模型数据的方法
		schoolactivationAll(root, {page,order}, ctx){
			return ctx.connector.schoolactivation.schoolactivationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSchoolactivation(root, {schoolactivation}, ctx){
			return ctx.connector.schoolactivation.addSchoolactivation(schoolactivation);
		},

		// 修改模型的方法
		updateSchoolactivation(root, {schoolactivation}, ctx){
			return ctx.connector.schoolactivation.updateSchoolactivation(schoolactivation);
		},

		// 删除模型的方法
		removeSchoolactivation(root, {id}, ctx){
			return ctx.connector.schoolactivation.removeSchoolactivation(id);
		},

	}
}
