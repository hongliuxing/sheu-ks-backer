/** 
 * 模型 RushActivity 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		rushActivity(root, {id}, ctx){
			return ctx.connector.rushActivity.rushActivity(id);
		},

		// 用于查询所有模型数据的方法
		rushActivityAll(root, {school_id,struts_show}, ctx){
			return ctx.connector.rushActivity.rushActivityAll(school_id,struts_show);
		},

	},
	Mutation: {
		// 新增模型的方法
		addRushActivity(root, {rushActivity}, ctx){
			return ctx.connector.rushActivity.addRushActivity(rushActivity);
		},

		// 修改模型的方法
		updateRushActivity(root, {rushActivity}, ctx){
			return ctx.connector.rushActivity.updateRushActivity(rushActivity);
		},

		// 删除模型的方法
		removeRushActivity(root, {id}, ctx){
			return ctx.connector.rushActivity.removeRushActivity(id);
		},

	}
}
