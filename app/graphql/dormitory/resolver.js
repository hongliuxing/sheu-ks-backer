/** 
 * 模型 Dormitory 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		dormitory(root, {id}, ctx){
			return ctx.connector.dormitory.dormitory(id);
		},

		// 用于查询所有模型数据的方法
		dormitoryAll(root, {page,order}, ctx){
			return ctx.connector.dormitory.dormitoryAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addDormitory(root, {dormitory}, ctx){
			return ctx.connector.dormitory.addDormitory(dormitory);
		},

		// 修改模型的方法
		updateDormitory(root, {dormitory}, ctx){
			return ctx.connector.dormitory.updateDormitory(dormitory);
		},

		// 删除模型的方法
		removeDormitory(root, {id}, ctx){
			return ctx.connector.dormitory.removeDormitory(id);
		},

	}
}
