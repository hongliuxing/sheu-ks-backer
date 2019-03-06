/** 
 * 模型 Applyforknight 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		applyforknight(root, {id}, ctx){
			return ctx.connector.applyforknight.applyforknight(id);
		},

		// 用于查询所有模型数据的方法
		applyforknightAll(root, {page,order}, ctx){
			return ctx.connector.applyforknight.applyforknightAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addApplyforknight(root, {applyforknight}, ctx){
			return ctx.connector.applyforknight.addApplyforknight(applyforknight);
		},

		// 修改模型的方法
		updateApplyforknight(root, {applyforknight}, ctx){
			return ctx.connector.applyforknight.updateApplyforknight(applyforknight);
		},

		// 删除模型的方法
		removeApplyforknight(root, {id}, ctx){
			return ctx.connector.applyforknight.removeApplyforknight(id);
		},

	}
}
