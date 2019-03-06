/** 
 * 模型 Area 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		area(root, {id}, ctx){
			return ctx.connector.area.area(id);
		},

		// 用于查询所有模型数据的方法
		areaAll(root, {page,order}, ctx){
			return ctx.connector.area.areaAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addArea(root, {area}, ctx){
			return ctx.connector.area.addArea(area);
		},

		// 修改模型的方法
		updateArea(root, {area}, ctx){
			return ctx.connector.area.updateArea(area);
		},

		// 删除模型的方法
		removeArea(root, {id}, ctx){
			return ctx.connector.area.removeArea(id);
		},

	}
}
