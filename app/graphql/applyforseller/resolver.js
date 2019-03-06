/** 
 * 模型 Applyforseller 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		applyforseller(root, {id}, ctx){
			return ctx.connector.applyforseller.applyforseller(id);
		},

		// 用于查询所有模型数据的方法
		applyforsellerAll(root, {page,order}, ctx){
			return ctx.connector.applyforseller.applyforsellerAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addApplyforseller(root, {applyforseller}, ctx){
			return ctx.connector.applyforseller.addApplyforseller(applyforseller);
		},

		// 修改模型的方法
		updateApplyforseller(root, {applyforseller}, ctx){
			return ctx.connector.applyforseller.updateApplyforseller(applyforseller);
		},

		// 删除模型的方法
		removeApplyforseller(root, {id}, ctx){
			return ctx.connector.applyforseller.removeApplyforseller(id);
		},

	}
}
