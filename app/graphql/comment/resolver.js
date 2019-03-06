/** 
 * 模型 Comment 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		comment(root, {id}, ctx){
			return ctx.connector.comment.comment(id);
		},

		// 用于查询所有模型数据的方法
		commentAll(root, {page,order}, ctx){
			return ctx.connector.comment.commentAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addComment(root, {comment}, ctx){
			return ctx.connector.comment.addComment(comment);
		},

		// 修改模型的方法
		updateComment(root, {comment}, ctx){
			return ctx.connector.comment.updateComment(comment);
		},

		// 删除模型的方法
		removeComment(root, {id}, ctx){
			return ctx.connector.comment.removeComment(id);
		},

	}
}
