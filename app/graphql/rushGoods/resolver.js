/** 
 * 模型 RushGoods 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		rushGoods(root, {id}, ctx){
			return ctx.connector.rushGoods.rushGoods(id);
		},

		// 用于查询所有模型数据的方法
		rushGoodsAll(root, {page,order,where}, ctx){
			return ctx.connector.rushGoods.rushGoodsAll(page,order,where);
		},

		// 筛选爆款活动商品
		screenRushGoods(root, {activity_id, school_id, own}, ctx){
			return ctx.connector.rushGoods.screenRushGoods(activity_id, school_id, own);
		},

	},
	Mutation: {
		// 新增模型的方法
		addRushGoods(root, {rushGoods}, ctx){
			return ctx.connector.rushGoods.addRushGoods(rushGoods);
		},

		// 修改模型的方法
		updateRushGoods(root, {rushGoods}, ctx){
			return ctx.connector.rushGoods.updateRushGoods(rushGoods);
		},

		// 删除模型的方法
		removeRushGoods(root, {id}, ctx){
			return ctx.connector.rushGoods.removeRushGoods(id);
		},
		/**
		 * 变更商品的活动参与状态
		 */
		changePartRushGoods(root, {activity_id, goods_id, is_own_activity}, ctx){
			return ctx.connector.rushGoods.changePartRushGoods(activity_id, goods_id, is_own_activity);
		}

	}
}
