/** 
 * 模型 Dormitorysupplierrelation 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		dormitorysupplierrelation(root, {id}, ctx){
			return ctx.connector.dormitorysupplierrelation.dormitorysupplierrelation(id);
		},

		// 用于查询所有模型数据的方法
		dormitorysupplierrelationAll(root, {page,order}, ctx){
			return ctx.connector.dormitorysupplierrelation.dormitorysupplierrelationAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addDormitorysupplierrelation(root, {dormitorysupplierrelation}, ctx){
			return ctx.connector.dormitorysupplierrelation.addDormitorysupplierrelation(dormitorysupplierrelation);
		},

		// 修改模型的方法
		updateDormitorysupplierrelation(root, {dormitorysupplierrelation}, ctx){
			return ctx.connector.dormitorysupplierrelation.updateDormitorysupplierrelation(dormitorysupplierrelation);
		},

		// 删除模型的方法
		removeDormitorysupplierrelation(root, {id}, ctx){
			return ctx.connector.dormitorysupplierrelation.removeDormitorysupplierrelation(id);
		},

	}
}
