/** 
 * 模型 Noticeforknight 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		noticeforknight(root, {id}, ctx){
			return ctx.connector.noticeforknight.noticeforknight(id);
		},

		// 用于查询所有模型数据的方法
		noticeforknightAll(root, {page,order}, ctx){
			return ctx.connector.noticeforknight.noticeforknightAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addNoticeforknight(root, {noticeforknight}, ctx){
			return ctx.connector.noticeforknight.addNoticeforknight(noticeforknight);
		},

		// 修改模型的方法
		updateNoticeforknight(root, {noticeforknight}, ctx){
			return ctx.connector.noticeforknight.updateNoticeforknight(noticeforknight);
		},

		// 删除模型的方法
		removeNoticeforknight(root, {id}, ctx){
			return ctx.connector.noticeforknight.removeNoticeforknight(id);
		},

	}
}
