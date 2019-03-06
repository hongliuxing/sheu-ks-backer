/** 
 * 模型 Sysaaauser 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		sysaaauser(root, {id}, ctx){
			return ctx.connector.sysaaauser.sysaaauser(id);
		},

		// 用于查询所有模型数据的方法
		sysaaauserAll(root, {page,order}, ctx){
			return ctx.connector.sysaaauser.sysaaauserAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addSysaaauser(root, {sysaaauser}, ctx){
			return ctx.connector.sysaaauser.addSysaaauser(sysaaauser);
		},

		// 修改模型的方法
		updateSysaaauser(root, {sysaaauser}, ctx){
			return ctx.connector.sysaaauser.updateSysaaauser(sysaaauser);
		},

		// 删除模型的方法
		removeSysaaauser(root, {id}, ctx){
			return ctx.connector.sysaaauser.removeSysaaauser(id);
		},

	}
}
