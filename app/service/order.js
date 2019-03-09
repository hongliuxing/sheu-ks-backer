"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./common/base");
const message_1 = require("../utils/message");
class OrderService extends base_1.default {
    /**
     * 查询订单列表
     * @param school_id
     */
    async queryDormDetails(dorm_id) {
        const { ctx } = this;
        try {
            const dormDetails = await ctx.model.query('CALL proc_listen_dormitory_details(?)', { replacements: [dorm_id], });
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
            const schoolOrders = await ctx.model.query('CALL proc_listen_dormitory_state(?)', { replacements: [school_id], });
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
            const schoolOrders = await ctx.model.query('CALL proc_listen_orders(?)', { replacements: [school_id], });
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
            let orderInfo = await ctx.model.query('CALL proc_listen_order_info(?)', { replacements: [order_id], });
            orderInfo = orderInfo[0];
            // 查询订单旗下的所有商品
            let goods = [];
            if (orderInfo) {
                goods = await ctx.model.query('CALL proc_listen_orderGoods(?)', { replacements: [order_id], });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF3QztBQUN4Qyw4Q0FBc0Q7QUFFdEQsTUFBcUIsWUFBYSxTQUFRLGNBQVc7SUFFakQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQWU7UUFDekMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJO1lBQ0EsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDckMsdUNBQXVDLEVBQ3ZDLEVBQUUsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FDaEMsQ0FBQztZQUNGLGlEQUFpRDtZQUNqRCxPQUFPLFdBQVcsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxDQUFDLG1CQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFpQjtRQUNyQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUk7WUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUN0QyxxQ0FBcUMsRUFDckMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBSSxDQUNsQyxDQUFDO1lBQ0YsaURBQWlEO1lBQ2pELE9BQU8sWUFBWSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQWlCO1FBQ3RDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSTtZQUNBLE1BQU0sWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3RDLDRCQUE0QixFQUM1QixFQUFFLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFJLENBQ2xDLENBQUM7WUFDRixpREFBaUQ7WUFDakQsT0FBTyxZQUFZLENBQUM7U0FDdkI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBZ0I7UUFDeEMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJO1lBQ0EsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDakMsZ0NBQWdDLEVBQ2hDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUksQ0FDakMsQ0FBQztZQUNGLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekIsY0FBYztZQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUcsU0FBUyxFQUFDO2dCQUNULEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUN6QixnQ0FBZ0MsRUFDaEMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBSSxDQUNqQyxDQUFDO2FBQ0w7WUFDRCxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV4QixpREFBaUQ7WUFFakQsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztDQUNKO0FBOUZELCtCQThGQyJ9