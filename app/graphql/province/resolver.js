/** 
 * 模型 Province 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		province(root, {id}, ctx){
			return ctx.connector.province.province(id);
		},

		// 用于查询所有模型数据的方法
		provinceAll(root, {page,order}, ctx){
			return ctx.connector.province.provinceAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addProvince(root, {province}, ctx){
			return ctx.connector.province.addProvince(province);
		},

		// 修改模型的方法
		updateProvince(root, {province}, ctx){
			return ctx.connector.province.updateProvince(province);
		},

		// 删除模型的方法
		removeProvince(root, {id}, ctx){
			return ctx.connector.province.removeProvince(id);
		},

	}
}
