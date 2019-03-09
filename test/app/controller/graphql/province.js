"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    code: 'code_value',
    name: 'name_value',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			province(id: "some id"){
				id, code, name
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
			provinceAll(order:[{key:"createdAt",sort:DESC}],page:{limit:5}){
				id, code, name
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
			addProvince(province:${gql_util_1.spread(obj)}){
				id, code, name
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
			updateProvince(province:${gql_util_1.spread(obj)}){
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
			removeProvince(id: "some id"){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm92aW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsMENBQTBDO0FBQzFDLGdEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBRztJQUNYLEVBQUUsRUFBRSxNQUFNLEVBQUU7SUFDWixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsWUFBWTtDQUNsQixDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDOUIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xDLE1BQU0sRUFBRSxHQUFHOzs7O0lBSVQsQ0FBQztRQUVILElBQUk7WUFDSCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUNZLFFBQUEsT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyQyxNQUFNLEVBQUUsR0FBRzs7OztJQUlULENBQUM7UUFFSCxJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FB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