"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    unionid: 'unionid_value',
    openid: 'openid_value',
    nickname: 'nickname_value',
    realname: 'realname_value',
    person_id: 'person_id_value',
    telephone: 'telephone_value',
    logo_url: 'logo_url_value',
    school_id: 'school_id_value',
    gender: 9,
    struts: 3,
    created: '203.8613217925330146-8.96677051983864-0.4292755956668062 21.339315526164395:11.392467840195701:1.9282680396552587',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			knight(id: "some id"){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created
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
			knightAll(order:[{key:"created",sort:DESC}],page:{limit:6, index: 1}, 
				where: {struts: 1}
			){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created,
				dorm_id, dormitory{
					drom_name, drom_num
				}
			}
		}`;
        console.log(q1);
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 4));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
exports.screenRushKnightAll = async () => {
    it('should HTTP /screenRushKnightAll', async () => {
        const q1 = `query={
			screenRushKnightAll(
				where: {school_id: 2430, activity_id: "82f3d5b0-38a8-11e9-bf0a-efe4adef46e9"}
			){
				id, nickname, realname, person_id, telephone, logo_url, school_id, gender, created,
				dorm_id, kcount, drom_name, drom_num
			}
		}`;
        console.log(q1);
        try {
            const res = await httpUtil.toGet(q1);
            console.log('/graphql result ::', util.inspect(res.body, true, 4));
        }
        catch (err) {
            console.log('/graphql try->catch ::', err);
        }
    });
};
/**
 *
 */
exports.add = async () => {
    it('should HTTP /add', async () => {
        const q1 = `mutation{
			addKnight(knight:${gql_util_1.spread(obj)}){
				id, unionid, openid, nickname, realname, person_id, telephone, logo_url, school_id, gender, struts, created
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
			updateKnight(knight:${gql_util_1.spread(obj)}){
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
			removeKnight(id: "some id"){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25pZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia25pZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwwQ0FBMEM7QUFDMUMsZ0RBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHO0lBQ1gsRUFBRSxFQUFFLE1BQU0sRUFBRTtJQUNaLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLFNBQVMsRUFBRSxpQkFBaUI7SUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPLEVBQUUsbUhBQW1IO0NBQzVILENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtJQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEMsTUFBTSxFQUFFLEdBQUc7Ozs7SUFJVCxDQUFDO1FBRUgsSUFBSTtZQUNILE1BQU0sR0FBRyxHQUFRLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUMsQ0FB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