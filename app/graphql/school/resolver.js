/** 
 * 模型 School 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		school(root, {id}, ctx){
			return ctx.connector.school.school(id);
		},

		// 用于查询所有模型数据的方法
		schoolAll(root, {page,order}, ctx){
			return ctx.connector.school.schoolAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSchool(root, {school}, ctx){
			return ctx.connector.school.addSchool(school);
		},

		// 修改模型的方法
		updateSchool(root, {school}, ctx){
			return ctx.connector.school.updateSchool(school);
		},

		// 删除模型的方法
		removeSchool(root, {id}, ctx){
			return ctx.connector.school.removeSchool(id);
		},

	}
}
