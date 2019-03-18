"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    school_id: 3,
    partner_id: 'partner_id_value',
    title: 'title_value',
    logo_url: 'logo_pic_value',
    struts_show: 0,
    begin_show: '200.04839809624681113-1.928851372535144-14.80139474104156 23.300005908351245:34.27391667179538:29.197281836646223',
    end_show: '205.556944911911281-10.283215938950876-14.703824802825068 14.071685172040475:18.203435526995882:32.011439108926886',
    begin_rush: '2016.262761028934175-3.1560300694223082-1.6274819584812175 17.432871045677466:26.073608928894387:35.839684978939694',
    end_rush: '2017.196706197704863-9.15080956220945-20.205344639743956 3.334076464961038:44.931529676914344:10.47760565968976',
    createAt: '2015.584677268924082-4.163211464556432-6.308166867557662 18.400529331093786:49.10884900926088:34.9519700814859',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			rushActivity(id: "some id"){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
exports.findAll = async () => {
    it('should HTTP /findAll', async () => {
        const q1 = `query={
			rushActivityAll(school_id:2430){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
exports.add = async () => {
    it('should HTTP /add', async () => {
        // const q1 = `mutation{
        // 	addRushActivity(rushActivity:${ spread(obj) }){
        // 		id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
        // 	}
        // }`;
        const q1 = `mutation{
			addRushActivity(rushActivity: {
				logo_url: "https://sheu-huabei5.oss-cn-huhehaote.aliyuncs.com/kuaisong/supplier/headpic/wxaa6bce288a81f5ce.o6zAJs0_GiwtacOtWzvfFDK-ruhM.OuFn4oOO7VQc8186c51b915c3e3c2636a3b2d3bedf35.jpg",
				title: "面食日",school_id: 2430,struts: 1,begin_rush: "2019-02-26 21:02",end_rush: "2019-02-26 23:03"}){
				id, school_id, partner_id, title, logo_url, struts_show, begin_show, end_show, begin_rush, end_rush, createAt
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
        const q1 = `mutation{
			updateRushActivity(rushActivity:${gql_util_1.spread(obj)}){
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
			removeRushActivity(id: "some id"){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVzaF9hY3Rpdml0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1c2hfYWN0aXZpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLDBDQUEwQztBQUMxQyxnREFBeUM7QUFFekMsTUFBTSxHQUFHLEdBQUc7SUFDWCxFQUFFLEVBQUUsTUFBTSxFQUFFO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsV0FBVyxFQUFFLENBQUM7SUFDZCxVQUFVLEVBQUUsbUhBQW1IO0lBQy9ILFFBQVEsRUFBRSxvSEFBb0g7SUFDOUgsVUFBVSxFQUFFLHFIQUFxSDtJQUNqSSxRQUFRLEVBQUUsaUhBQWlIO0lBQzNILFFBQVEsRUFBRSxnSEFBZ0g7Q0FDMUgsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQyxNQUFNLEVBQUUsR0FBRzs7OztJQUlULENBQUM7UUFFSCxJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7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