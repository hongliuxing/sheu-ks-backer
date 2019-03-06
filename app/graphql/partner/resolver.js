/** 
 * 模型 Partner 的 Graphql 解析器 
*/
module.exports = {
	Query: {
		// 用于查询单个模型数据的方法
		partner(root, {id}, ctx){
			return ctx.connector.partner.partner(id);
		},

		// 用于查询所有模型数据的方法
		partnerAll(root, {page,order}, ctx){
			return ctx.connector.partner.partnerAll(page,order);
		},

	},
	Mutation: {
		// 新增模型的方法
		addPartner(root, {partner}, ctx){
			return ctx.connector.partner.addPartner(partner);
		},

		// 修改模型的方法
		updatePartner(root, {partner}, ctx){
			return ctx.connector.partner.updatePartner(partner);
		},

		// 删除模型的方法
		removePartner(root, {id}, ctx){
			return ctx.connector.partner.removePartner(id);
		},

	}
}
