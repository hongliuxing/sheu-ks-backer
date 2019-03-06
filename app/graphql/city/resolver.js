/** 
 * 模型 City 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		city(root, {id}, ctx){
			return ctx.connector.city.city(id);
		},

		// 用于查询所有模型数据的方法
		cityAll(root, {page,order}, ctx){
			return ctx.connector.city.cityAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addCity(root, {city}, ctx){
			return ctx.connector.city.addCity(city);
		},

		// 修改模型的方法
		updateCity(root, {city}, ctx){
			return ctx.connector.city.updateCity(city);
		},

		// 删除模型的方法
		removeCity(root, {id}, ctx){
			return ctx.connector.city.removeCity(id);
		},

	}
}
