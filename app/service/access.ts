/**
 * Access 登录相关的业务逻辑层
 */
// const uuidv1 = require('uuid/v1');
// import * as ProConf from '../utils/configs/project-config';
const randomstring = require('randomstring');
import * as HttpClient from '../utils/http-client';
import Message, { ErrorType } from '../utils/message';
import Token from '../utils/token';
import BaseService from './common/base';

// console.log('uuidv1 ======> ', uuidv1);

/**
 * Test Service
 */
export default class AccessService extends BaseService {

    /**
     * 合伙人端登录:
     * 判断数据库中是否存在该 openid
     * 若不存在则无法登录, 提示填写注册单
     * 若存在则返回 Partner 数据
     * @param openid - your name
     */
    public async partnerLogin(openid: string) {
        const {ctx} = this;
        const where = { openid };

        try {
            const include = [ctx.model.School];
            const partner = await ctx.model.Partner.findOne({ where, include });
            this.logger.debug('【partnerLogin】=> ', partner);
            console.log('【partnerLogin】=> ', partner);
            console.log('【partnerLogin openid】=> ', openid);

            const token = new Token();
            if(!partner){
                return new Message(ErrorType.PHONE_NOT_FOUND, {
                    openidToken: token.createToken({ id: openid }),
                    openid,
                    msg: '该用户不存在',
                });
            }
            // 创建并生成token,然后返回
            partner.dataValues.loginToken = token.createToken({ id: partner.id });
            return new Message(null, partner);
        } catch (e) {
            this.logger.error(e);
            return new Message(ErrorType.WX_LOGIN_FAIL, 'saveLogin4SystemRole exception!');
        }
    }

    /**
     * 合伙人端短信验证
     * @param telephone
     */
    public async partnerSMS(telephone: string) {
        try {
            const {ctx} = this;
            const where = { telephone };
            const partner = await ctx.model.Partner.findOne({ where, raw: true });
            if(!partner){
                // 权限不足以注册
                return new Message(ErrorType.UNKNOW_ERROR, '权限不足以注册合伙人!');
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
            const phoneToken = new Token();
            // 返回验证码所表示的token
            return new Message(null, phoneToken.createToken({ smscode: code }, 5));
        } catch (e) {
            this.logger.error(e);
            return new Message(ErrorType.UNKNOW_ERROR, e);
        }
    }

    /**
     * 合伙人认证注册
     * @param telephone 
     * @param code 
     */
    public async partnerRegister(telephone: string, code: string, smsToken: string, openid: string) {
        try {
            // 验证手机验证码的正确性
            const phoneCheckToken = new Token();
            const smscode = phoneCheckToken.checkToken(smsToken).data.smscode;
            if (code !== smscode) {
                // 验证码输入的不正确
                return new Message(ErrorType.PHONE_CODE_FAIL);
            }
            // 如果正确, 则保存该用户的 openid 至合伙人表中电话号码相对应的条目中
            const {ctx} = this;
            const values = { openid };
            const options = {
                where: {
                    telephone,
                },
            };
            const result = await ctx.model.Partner.update(values, options);
            const affected_rows = result[0]; // 更新返回影响行数
            if(affected_rows > 0){
                // 查询并返回当前登录用户
                const include = [ctx.model.School];
                const partner = await ctx.model.Partner.findOne({
                    where: {
                        openid, telephone,
                    },
                    include,
                    // raw: true,
                });
                // 生成用户的 loginToken
                const token = new Token();
                partner.dataValues.loginToken = token.createToken({ id: partner.id });

                return new Message(null, partner);
            }else{
                return new Message(ErrorType.DATABASE_ERROR, '更新注册认证时失败!');
            }
        } catch (error) {
            this.logger.error(error);
            console.error('partnerRegister err: ', error);
            // 验证码过期或者无效
            return new Message(ErrorType.PHONE_CODE_TIMEOUT);
        }
    }
}