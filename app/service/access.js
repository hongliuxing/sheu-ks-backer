"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Access 登录相关的业务逻辑层
 */
// const uuidv1 = require('uuid/v1');
// import * as ProConf from '../utils/configs/project-config';
const randomstring = require('randomstring');
const HttpClient = require("../utils/http-client");
const message_1 = require("../utils/message");
const token_1 = require("../utils/token");
const base_1 = require("./common/base");
// console.log('uuidv1 ======> ', uuidv1);
/**
 * Test Service
 */
class AccessService extends base_1.default {
    /**
     * 合伙人端登录:
     * 判断数据库中是否存在该 openid
     * 若不存在则无法登录, 提示填写注册单
     * 若存在则返回 Partner 数据
     * @param openid - your name
     */
    async partnerLogin(openid) {
        const { ctx } = this;
        const where = { openid };
        try {
            const include = [ctx.model.School];
            const partner = await ctx.model.Partner.findOne({ where, include });
            this.logger.debug('【partnerLogin】=> ', partner);
            console.log('【partnerLogin】=> ', partner);
            console.log('【partnerLogin openid】=> ', openid);
            const token = new token_1.default();
            if (!partner) {
                return new message_1.default(message_1.ErrorType.PHONE_NOT_FOUND, {
                    openidToken: token.createToken({ id: openid }),
                    openid,
                    msg: '该用户不存在',
                });
            }
            // 创建并生成token,然后返回
            partner.dataValues.loginToken = token.createToken({ id: partner.id });
            return new message_1.default(null, partner);
        }
        catch (e) {
            this.logger.error(e);
            return new message_1.default(message_1.ErrorType.WX_LOGIN_FAIL, 'saveLogin4SystemRole exception!');
        }
    }
    /**
     * 合伙人端短信验证
     * @param telephone
     */
    async partnerSMS(telephone) {
        try {
            const { ctx } = this;
            const where = { telephone };
            const partner = await ctx.model.Partner.findOne({ where, raw: true });
            if (!partner) {
                // 权限不足以注册
                return new message_1.default(message_1.ErrorType.UNKNOW_ERROR, '权限不足以注册合伙人!');
            }
            // 生成 6 位验证码
            const code = randomstring.generate({
                length: 6,
                charset: 'numeric',
            });
            // 发送验证码至手机
            const sms_result = await HttpClient.sendSMS(telephone, code);
            console.log('sms_result:: ', sms_result);
            // 将验证码生成 token
            const phoneToken = new token_1.default();
            // 返回验证码所表示的token
            return new message_1.default(null, phoneToken.createToken({ smscode: code }, 5));
        }
        catch (e) {
            this.logger.error(e);
            return new message_1.default(message_1.ErrorType.UNKNOW_ERROR, e);
        }
    }
    /**
     * 合伙人认证注册
     * @param telephone
     * @param code
     */
    async partnerRegister(telephone, code, smsToken, openid) {
        try {
            // 验证手机验证码的正确性
            const phoneCheckToken = new token_1.default();
            const smscode = phoneCheckToken.checkToken(smsToken).data.smscode;
            if (code !== smscode) {
                // 验证码输入的不正确
                return new message_1.default(message_1.ErrorType.PHONE_CODE_FAIL);
            }
            // 如果正确, 则保存该用户的 openid 至合伙人表中电话号码相对应的条目中
            const { ctx } = this;
            const values = { openid };
            const options = {
                where: {
                    telephone,
                },
            };
            const result = await ctx.model.Partner.update(values, options);
            const affected_rows = result[0]; // 更新返回影响行数
            if (affected_rows > 0) {
                // 查询并返回当前登录用户
                const include = [ctx.model.School];
                const partner = await ctx.model.Partner.findOne({
                    where: {
                        openid, telephone,
                    },
                    include,
                });
                // 生成用户的 loginToken
                const token = new token_1.default();
                partner.dataValues.loginToken = token.createToken({ id: partner.id });
                return new message_1.default(null, partner);
            }
            else {
                return new message_1.default(message_1.ErrorType.DATABASE_ERROR, '更新注册认证时失败!');
            }
        }
        catch (error) {
            this.logger.error(error);
            console.error('partnerRegister err: ', error);
            // 验证码过期或者无效
            return new message_1.default(message_1.ErrorType.PHONE_CODE_TIMEOUT);
        }
    }
}
exports.default = AccessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxxQ0FBcUM7QUFDckMsOERBQThEO0FBQzlELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QyxtREFBbUQ7QUFDbkQsOENBQXNEO0FBQ3RELDBDQUFtQztBQUNuQyx3Q0FBd0M7QUFFeEMsMENBQTBDO0FBRTFDOztHQUVHO0FBQ0gsTUFBcUIsYUFBYyxTQUFRLGNBQVc7SUFFbEQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFjO1FBQ3BDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkIsTUFBTSxLQUFLLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUV6QixJQUFJO1lBQ0EsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRWhELE1BQU0sS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBQztnQkFDVCxPQUFPLElBQUksaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLGVBQWUsRUFBRTtvQkFDMUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLENB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