import BaseService from './common/base';
import Message, { ErrorType } from '../utils/message';

export default class OrderService extends BaseService {

    /**
     * 查询订单列表
     * @param school_id 
     */
    public async queryDormDetails(dorm_id: string) {
        const {ctx} = this;
        try {
            const dormDetails = await ctx.model.query(
                'CALL proc_listen_dormitory_details(?)',
                { replacements: [dorm_id],  },
            );
            // console.log('schoolOrders => ', schoolOrders);
            return dormDetails;
        } catch (error) {
            const msg = new Message(ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }

    /**
     * 查询订单列表
     * @param school_id 
     */
    public async queryDorms(school_id: number) {
        const {ctx} = this;
        try {
            const schoolOrders = await ctx.model.query(
                'CALL proc_listen_dormitory_state(?)',
                { replacements: [school_id],  },
            );
            // console.log('schoolOrders => ', schoolOrders);
            return schoolOrders;
        } catch (error) {
            const msg = new Message(ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }

    /**
     * 查询订单列表
     * @param school_id 
     */
    public async queryOrders(school_id: number) {
        const {ctx} = this;
        try {
            const schoolOrders = await ctx.model.query(
                'CALL proc_listen_orders(?)',
                { replacements: [school_id],  },
            );
            // console.log('schoolOrders => ', schoolOrders);
            return schoolOrders;
        } catch (error) {
            const msg = new Message(ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }

    /**
     * 查询订单详情
     * @param order_id 
     */
    public async queryOrderInfo(order_id: string) {
        const {ctx} = this;
        try {
            let orderInfo = await ctx.model.query(
                'CALL proc_listen_order_info(?)',
                { replacements: [order_id],  },
            );
            orderInfo = orderInfo[0];

            // 查询订单旗下的所有商品
            let goods = [];
            if(orderInfo){
                goods = await ctx.model.query(
                    'CALL proc_listen_orderGoods(?)',
                    { replacements: [order_id],  },
                );
            }
            orderInfo.goods = goods;

            // console.log('schoolOrders => ', schoolOrders);

            return orderInfo;
        } catch (error) {
            const msg = new Message(ErrorType.DATABASE_ERROR, error);
            this.logger.error(msg);
            return [];
        }
    }
}