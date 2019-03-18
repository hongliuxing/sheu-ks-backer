"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../utils/message");
const base_1 = require("./common/base");
class OrderService extends base_1.default {
    /**
     * 查询订单列表
     * @param school_id
     */
    async queryDormDetails(dorm_id) {
        const { ctx } = this;
        try {
            const dormDetails = await ctx.model.query('CALL proc_listen_dormitory_details(?)', { replacements: [dorm_id] });
            // console.log('schoolOrders => ', schoolOrders);
            return dormDetails;
        }
        catch (error) {
            const msg = new message_1.default(message_1.ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }
    /**
     * 查询订单列表
     * @param school_id
     */
    async queryDorms(school_id) {
        const { ctx } = this;
        try {
            const schoolOrders = await ctx.model.query('CALL proc_listen_dormitory_state(?)', { replacements: [school_id] });
            // console.log('schoolOrders => ', schoolOrders);
            return schoolOrders;
        }
        catch (error) {
            const msg = new message_1.default(message_1.ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }
    /**
     * 查询订单列表
     * @param school_id
     */
    async queryOrders(school_id) {
        const { ctx } = this;
        try {
            const schoolOrders = await ctx.model.query('CALL proc_listen_orders(?)', { replacements: [school_id] });
            // console.log('schoolOrders => ', schoolOrders);
            return schoolOrders;
        }
        catch (error) {
            const msg = new message_1.default(message_1.ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }
    /**
     * 查询订单详情
     * @param order_id
     */
    async queryOrderInfo(order_id) {
        const { ctx } = this;
        try {
            let orderInfo = await ctx.model.query('CALL proc_listen_order_info(?)', { replacements: [order_id] });
            orderInfo = orderInfo[0];
            // 查询订单旗下的所有商品
            let goods = [];
            if (orderInfo) {
                goods = await ctx.model.query('CALL proc_listen_orderGoods(?)', { replacements: [order_id] });
            }
            orderInfo.goods = goods;
            // console.log('schoolOrders => ', schoolOrders);
            return orderInfo;
        }
        catch (error) {
            const msg = new message_1.default(message_1.ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }
}
exports.default = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFzRDtBQUN0RCx3Q0FBd0M7QUFFeEMsTUFBcUIsWUFBYSxTQUFRLGNBQVc7SUFFakQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQWU7UUFDekMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJO1lBQ0EsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDckMsdUNBQXVDLEVBQ3ZDLEVBQUUsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUcsQ0FDL0IsQ0FBQztZQUNGLGlEQUFpRDtZQUNqRCxPQUFPLFdBQVcsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxDQUFDLG1CQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFpQjtRQUNyQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUk7WUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUN0QyxxQ0FBcUMsRUFDckMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRyxDQUNqQyxDQUFDO1lBQ0YsaURBQWlEO1lBQ2pELE9BQU8sWUFBWSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQWlCO1FBQ3RDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSTtZQUNBLE1BQU0sWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3RDLDRCQUE0QixFQUM1QixFQUFFLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFHLENBQ2pDLENBQUM7WUFDRixpREFBaUQ7WUFDakQsT0FBTyxZQUFZLENBQUM7U0FDdkI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBZ0I7UUFDeEMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJO1lBQ0EsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDakMsZ0NBQWdDLEVBQ2hDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUcsQ0FDaEMsQ0FBQztZQUNGLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekIsY0FBYztZQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksU0FBUyxFQUFDO2dCQUNWLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUN6QixnQ0FBZ0MsRUFDaEMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRyxDQUNoQyxDQUFDO2FBQ0w7WUFDRCxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV4QixpREFBaUQ7WUFFakQsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztDQUNKO0FBOUZELCtCQThGQyJ9