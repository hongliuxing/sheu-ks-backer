/** 
 * 模型 Applyforpartner 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		applyforpartner(root, {id}, ctx){
			return ctx.connector.applyforpartner.applyforpartner(id);
		},

		// 用于查询所有模型数据的方法
		applyforpartnerAll(root, {page,order}, ctx){
			return ctx.connector.applyforpartner.applyforpartnerAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addApplyforpartner(root, {applyforpartner}, ctx){
			return ctx.connector.applyforpartner.addApplyforpartner(applyforpartner);
		},

		// 修改模型的方法
		updateApplyforpartner(root, {applyforpartner}, ctx){
			return ctx.connector.applyforpartner.updateApplyforpartner(applyforpartner);
		},

		// 删除模型的方法
		removeApplyforpartner(root, {id}, ctx){
			return ctx.connector.applyforpartner.removeApplyforpartner(id);
		},

	}
}
