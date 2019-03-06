/** 
 * 模型 Banner 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		banner(root, {id}, ctx){
			return ctx.connector.banner.banner(id);
		},

		// 用于查询所有模型数据的方法
		bannerAll(root, {where}, ctx){
			return ctx.connector.banner.bannerAll(where);
		},

	},
	Mutation: {
		// 新增模型的方法
		addBanner(root, {banner}, ctx){
			return ctx.connector.banner.addBanner(banner);
		},

		// 修改模型的方法
		updateBanner(root, {banner}, ctx){
			return ctx.connector.banner.updateBanner(banner);
		},

		// 删除模型的方法
		removeBanner(root, {id}, ctx){
			return ctx.connector.banner.removeBanner(id);
		},

	}
}
