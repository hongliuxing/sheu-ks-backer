/** 
 * 模型 Goods 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		goods(root, {id}, ctx){
			return ctx.connector.goods.goods(id);
		},

		// 用于查询所有模型数据的方法
		goodsAll(root, {page,order,where}, ctx){
			return ctx.connector.goods.goodsAll(page,order,where);
		},

	},
	Mutation: {
		// 新增模型的方法
		addGoods(root, {goods}, ctx){
			return ctx.connector.goods.addGoods(goods);
		},

		// 修改模型的方法
		updateGoods(root, {goods}, ctx){
			return ctx.connector.goods.updateGoods(goods);
		},

		// 删除模型的方法
		removeGoods(root, {id}, ctx){
			return ctx.connector.goods.removeGoods(id);
		},

	}
}
