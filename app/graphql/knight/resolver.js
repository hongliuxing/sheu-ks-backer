/** 
 * 模型 Knight 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		knight(root, {id}, ctx){
			return ctx.connector.knight.knight(id);
		},

		// 用于查询所有模型数据的方法
		knightAll(root, {page,order, where}, ctx){
			console.log('knightAll..........');
			return ctx.connector.knight.knightAll(page,order, where);
		},

		// 用于查询所有模型数据的方法
		screenRushKnightAll(root, {where}, ctx){
			console.log('screenRushKnightAll..........');
			return ctx.connector.knight.screenRushKnightAll(where);
		},
	},
	Mutation: {
		// 新增模型的方法
		addKnight(root, {knight}, ctx){
			return ctx.connector.knight.addKnight(knight);
		},

		// 修改模型的方法
		updateKnight(root, {knight}, ctx){
			return ctx.connector.knight.updateKnight(knight);
		},

		// 删除模型的方法
		removeKnight(root, {id}, ctx){
			return ctx.connector.knight.removeKnight(id);
		},

	}
}
