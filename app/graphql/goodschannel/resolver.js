/** 
 * 模型 Goodschannel 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		goodschannel(root, {id}, ctx){
			return ctx.connector.goodschannel.goodschannel(id);
		},

		// 用于查询所有模型数据的方法
		goodschannelAll(root, {school_id}, ctx){
			return ctx.connector.goodschannel.goodschannelAll(school_id);
		},

	},
	Mutation: {
		// 新增模型的方法
		addGoodschannel(root, {goodschannel}, ctx){
			return ctx.connector.goodschannel.addGoodschannel(goodschannel);
		},

		// 修改模型的方法
		updateGoodschannel(root, {goodschannel}, ctx){
			return ctx.connector.goodschannel.updateGoodschannel(goodschannel);
		},

		// 删除模型的方法
		removeGoodschannel(root, {id}, ctx){
			return ctx.connector.goodschannel.removeGoodschannel(id);
		},

	}
}
