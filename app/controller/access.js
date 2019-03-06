"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_config_1 = require("../utils/configs/project-config");
const message_1 = require("../utils/message");
// import WXBizDataCrypt from '../utils/wx/WXBizDataCrypt';
const base_1 = require("./common/base");
/**
 * 登录相关接口控制器
 */
class AccessController extends base_1.default {
    /**
     * 使用 unionid 的登录方法
     * 通过 code 换取登录的 openid 和 unionid, 记录数据库
     * 创建用于登录的token,并返回
     *
     * 接口: /access/login
     * Method: post
     * 参数:
     *      appid: 应用标识
     *      loginCode: wx.login的res中获取的code
     *      encryptedData: 敏感数据加密字符串, getUserInfo的res中获取
     *      iv: 加密用到的iv, getUserInfo的res中获取
     * 返回数据:
     *      Message
     *
     */
    async partnerlogin() {
        const { ctx } = this;
        // 参数部分
        const { loginCode } = ctx.request.body;
        // let openid = '';
        ctx.logger.debug('Access Login: ', { loginCode });
        // ctx.logger.debug('egg curl:: ', ctx.curl);
        // 首先通过 loginCode 换取 session_key (mmp)
        const wxurl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + project_config_1.APP_KS_PARTNER + '&secret=' + project_config_1.default.get(project_config_1.APP_KS_PARTNER) +
            '&js_code=' + loginCode + '&grant_type=authorization_code';
        // 换取的结果中包含 openid 及 session_key
        const wx_result = (await ctx.curl(wxurl, { dataType: 'json' })).data;
        ctx.logger.info('wx_result => ', wx_result);
        // openid不存在的情况
        if (!wx_result.openid) {
            ctx.logger.debug('系统审核用户登录: ', wx_result.openid);
            ctx.body = new message_1.default(message_1.ErrorType.WX_LOGIN_FAIL, wx_result);
            return;
        }
        // wx_result不包含unionid, 需要在 encryptedData 中通过 iv 解析出 unionid
        try {
            ctx.body = await ctx.service.access.partnerLogin(wx_result.openid);
        }
        catch (error) {
            ctx.logger.error(error);
            return ctx.body = new message_1.default(message_1.ErrorType.WX_LOGIN_FAIL, '解析 openId 异常: ' + error);
        }
    } // end: login
    /**
     * 为合伙人端用户发送短信验证
     */
    async partnerSMS() {
        const { ctx } = this;
        // 参数部分
        const { telephone } = ctx.request.body;
        ctx.body = await ctx.service.access.partnerSMS(telephone);
    }
    /**
     * 为合伙人端用户发送短信验证
     */
    async partnerRegister() {
        const { ctx } = this;
        // 参数部分
        const { telephone, code, smsToken, openid } = ctx.request.body;
        ctx.body = await ctx.service.access.partnerRegister(telephone, code, smsToken, openid);
    }
}
exports.default = AccessController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0VBQTBFO0FBQzFFLDhDQUFzRDtBQUN0RCwyREFBMkQ7QUFDM0Qsd0NBQTJDO0FBRTNDOztHQUVHO0FBQ0gsTUFBcUIsZ0JBQWlCLFNBQVEsY0FBYztJQUMxRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSSxLQUFLLENBQUMsWUFBWTtRQUN2QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU87UUFDUCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDdkMsbUJBQW1CO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRCw2Q0FBNkM7UUFDN0Msc0NBQXNDO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLHFEQUFxRCxHQUFHLCtCQUFjLEdBQUcsVUFBVSxHQUFHLHdCQUFPLENBQUMsR0FBRyxDQUFDLCtCQUFjLENBQUM7WUFDN0gsV0FBVyxHQUFHLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztRQUM3RCxnQ0FBZ0M7UUFDaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLGVBQWU7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBTyxDQUFDLG1CQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzNELE9BQU87U0FDUjtRQUVELDREQUE0RDtRQUM1RCxJQUFJO1lBRUYsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsbUJBQVMsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDbEY7SUFFSCxDQUFDLENBQUEsYUFBYTtJQUVkOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDckIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPO1FBQ1AsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXZDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGVBQWU7UUFDMUIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPO1FBQ1AsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRS9ELEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGO0FBckVELG1DQXFFQyJ9