/** 
 * 模型 Businesstypes 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		businesstypes(root, {id}, ctx){
			return ctx.connector.businesstypes.businesstypes(id);
		},

		// 用于查询所有模型数据的方法
		businesstypesAll(root, {page,order}, ctx){
			return ctx.connector.businesstypes.businesstypesAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addBusinesstypes(root, {businesstypes}, ctx){
			return ctx.connector.businesstypes.addBusinesstypes(businesstypes);
		},

		// 修改模型的方法
		updateBusinesstypes(root, {businesstypes}, ctx){
			return ctx.connector.businesstypes.updateBusinesstypes(businesstypes);
		},

		// 删除模型的方法
		removeBusinesstypes(root, {id}, ctx){
			return ctx.connector.businesstypes.removeBusinesstypes(id);
		},

	}
}
