/** 
 * 模型 RushKnight 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		rushKnight(root, {id}, ctx){
			return ctx.connector.rushKnight.rushKnight(id);
		},

		// 用于查询所有模型数据的方法
		rushKnightAll(root, {page,order,where}, ctx){
			return ctx.connector.rushKnight.rushKnightAll(page,order,where);
		},

	},
	Mutation: {
		// 新增模型的方法
		addRushKnight(root, {rushKnight}, ctx){
			return ctx.connector.rushKnight.addRushKnight(rushKnight);
		},

		// 修改模型的方法
		updateRushKnight(root, {rushKnight}, ctx){
			return ctx.connector.rushKnight.updateRushKnight(rushKnight);
		},

		// 删除模型的方法
		removeRushKnight(root, {id}, ctx){
			return ctx.connector.rushKnight.removeRushKnight(id);
		},

		// 删除模型的方法
		changePart(root, {knight_id, activity_id, exec}, ctx){
			return ctx.connector.rushKnight.changePart(knight_id, activity_id, exec);
		},

	}
}
