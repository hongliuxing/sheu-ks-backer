"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const util = require('util');
const httpUtil = require("../utils/base");
const gql_util_1 = require("../utils/gql-util");
const obj = {
    id: uuidv1(),
    drom_name: 'drom_name_value',
    drom_num: 'drom_num_value',
    school_id: 'school_id_value',
};
exports.find = async () => {
    it('should HTTP /find', async () => {
        const q1 = `query={
			dormitory(id: "some id"){
				id, drom_name, drom_num, school_id
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
			dormitoryAll(order:[{key:"drom_num",sort:ASC }],page:{limit:5}, where: {school_id: 2430}){
				id, drom_name, drom_num, school_id
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
			addDormitory(dormitory:${gql_util_1.spread(obj)}){
				id, drom_name, drom_num, school_id
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
			updateDormitory(dormitory:${gql_util_1.spread(obj)}){
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
			removeDormitory(id: "some id"){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ybWl0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9ybWl0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwwQ0FBMEM7QUFDMUMsZ0RBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHO0lBQ1gsRUFBRSxFQUFFLE1BQU0sRUFBRTtJQUNaLFNBQVMsRUFBRSxpQkFBaUI7SUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixTQUFTLEVBQUUsaUJBQWlCO0NBQzVCLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtJQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEMsTUFBTSxFQUFFLEdBQUc7Ozs7SUFJVCxDQUFDO1FBRUgsSUFBSTtZQUNILE1BQU0sR0FBRyxHQUFRLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ1csUUFBQSxPQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDakMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sRUFBRSxHQUFHOzs7O0lBSVQsQ0FBQztRQUVILElBQUk7WUFDSCxNQUFNLEdBQUcsR0FBUSxNQUFN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