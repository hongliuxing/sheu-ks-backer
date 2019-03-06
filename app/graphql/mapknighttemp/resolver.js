/** 
 * 模型 Mapknighttemp 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		mapknighttemp(root, {id}, ctx){
			return ctx.connector.mapknighttemp.mapknighttemp(id);
		},

		// 用于查询所有模型数据的方法
		mapknighttempAll(root, {page,order}, ctx){
			return ctx.connector.mapknighttemp.mapknighttempAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addMapknighttemp(root, {mapknighttemp}, ctx){
			return ctx.connector.mapknighttemp.addMapknighttemp(mapknighttemp);
		},

		// 修改模型的方法
		updateMapknighttemp(root, {mapknighttemp}, ctx){
			return ctx.connector.mapknighttemp.updateMapknighttemp(mapknighttemp);
		},

		// 删除模型的方法
		removeMapknighttemp(root, {id}, ctx){
			return ctx.connector.mapknighttemp.removeMapknighttemp(id);
		},

	}
}
