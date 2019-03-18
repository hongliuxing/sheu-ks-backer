"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    goods_id: 'goods_id_value',
    supplier_id: 'supplier_id_value',
    current_count: 7,
    seller_count: 2,
    modify_time: '208.324634888103638-0.5742989022429708-14.210044517686814 23.022984981038416:59.6405587194604:40.662733071095985',
    create_time: '202.599576246392963-3.2929811652187917-7.067355845432611 11.313221484788208:0.8500833639894179:54.031896452854106',
};
exports.find = async (goods_id, supplier_id) => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			goodssupplierrelation(goods_id: "${goods_id}", supplier_id: "${supplier_id}"){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, 
				goods{
					id, thumb_url, title, good_type, summary, price, discount_price, 
					priority, struts, goodschannel{
						title
					}
				},
				supplier{
					unionid, openid, nickname, realname, phone_num, address
				}
			}
		}`;
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.findAll = async (where) => {
    it('should HTTP /findAll', async () => {
        const q1 = `query={
			goodssupplierrelationAll(order:[{key:"create_time",sort:DESC}],page:{limit:50, index: 1}, 
				where: ${gql_util_1.spread(where)}
			){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, create_time,
				goods{
					id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, price, discount_price, 
					priority, struts, created, goodschannel{
						id, seller_id, title, school_id, priority, created, gcount
					}
				},
				supplier{
					id, unionid, openid, nickname, realname, phone_num, type, sex, logo_url, notice, business_status, business_start, business_end, express_fee, min_amount, school_id, createAt, address
				}
			}
		}`;
        console.log(q1);
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 5));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.remainingAll = async (supplier_id, channel_id) => {
    it('should HTTP /findAll', async () => {
        const q1 = `query={
			goodssupplierrelationRemainingAll(order:[{key:"created",sort:DESC}],page:{limit:200, index: 1}, 
			supplier_id: "${supplier_id}", channel_id: "${channel_id}"
			){
				id, seller_id, dorm_id, channel_id, thumb_url, title, good_type, summary, 
				price, discount_price, priority, struts, created, goodschannel{
					title
				}
			}
		}`;
        console.log(q1);
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 5));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.add = async () => {
    it('should HTTP /add', async () => {
        const q1 = `mutation{
			addGoodssupplierrelation(goodssupplierrelation:${gql_util_1.spread(obj)}){
				id, goods_id, supplier_id, current_count, seller_count, modify_time, create_time
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.update = async () => {
    it('should HTTP /update', async () => {
        // const q1 = `mutation{
        // 	updateGoodssupplierrelation(goodssupplierrelation:${ spread(obj) }){
        // 		err, msg, desc, info
        // 	}
        // }`;
        const q1 = `mutation{
			updateGoodssupplierrelation(
				goodssupplierrelation: {
					goods_id: "17637800-4320-11e9-8219-5b1c993210c3",
					supplier_id: "123415f0-3bba-11e9-b878-cb83b89bb04b",current_count: 4
				}){
				err, msg, desc, info
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.remove = async () => {
    it('should HTTP /remove', async () => {
        const q1 = `mutation{
			removeGoodssupplierrelation(id: "some id"){
				err, msg, desc, info
			}
		}`;
        try {
            const res = await httpUtil.toPost(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 3));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNzdXBwbGllcnJlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZHNzdXBwbGllcnJlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwwQ0FBMEM7QUFDMUMsZ0RBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHO0lBQ1gsRUFBRSxFQUFFLE1BQU0sRUFBRTtJQUNaLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxhQUFhLEVBQUUsQ0FBQztJQUNoQixZQUFZLEVBQUUsQ0FBQztJQUNmLFdBQVcsRUFBRSxrSEFBa0g7SUFDL0gsV0FBVyxFQUFFLG1IQUFtSDtDQUNoSSxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRTtJQUNuRCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEMsTUFBTSxFQUFFLEdBQUc7c0NBQ3lCLFFBQVEsb0JBQW9CLFdBQVc7Ozs7Ozs7Ozs7OztJQVl6RSxDQUFDO1FBRUgsSUFBSTtZQUNILE1BQU0sR0FBRyxHQUFRLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ1cs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