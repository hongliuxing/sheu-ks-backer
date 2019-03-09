"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    ctype: 'ctype_value',
    clevel: 1,
    struts: 5,
    created: '206.519667838235628-0.6993016225157493-20.701728735064528 4.475825793832916:30.41101481369751:8.891273808482726',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			sellertypes(id: "some id"){
				id, ctype, clevel, struts, created
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
			sellertypesAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, ctype, clevel, struts, created
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
        const q1 = `mutation{
			addSellertypes(sellertypes:${gql_util_1.spread(obj)}){
				id, ctype, clevel, struts, created
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
			updateSellertypes(sellertypes:${gql_util_1.spread(obj)}){
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
			removeSellertypes(id: "some id"){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVydHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxsZXJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsMENBQTBDO0FBQzFDLGdEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBRztJQUNYLEVBQUUsRUFBRSxNQUFNLEVBQUU7SUFDWixLQUFLLEVBQUUsYUFBYTtJQUNwQixNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDO0lBQ1QsT0FBTyxFQUFFLGlIQUFpSDtDQUMxSCxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDOUIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xDLE1BQU0sRUFBRSxHQUFHOzs7O0lBSVQsQ0FBQztRQUVILElBQUk7WUFDSCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUNZLFFBQUEsT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyQyxNQUFNLEVBQUUsR0FBRzs7OztJQUlULENBQUM7UUFFSCxJQUFJO1lBQ0gs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