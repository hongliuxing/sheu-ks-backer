import ProConf, { APP_KS_PARTNER } from '../utils/configs/project-config';
import Message, { ErrorType } from '../utils/message';
// import WXBizDataCrypt from '../utils/wx/WXBizDataCrypt';
import BaseController from './common/base';

/**
 * 登录相关接口控制器
 */
export default class AccessController extends BaseController {
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
  public async partnerlogin() {
    const { ctx } = this;
    // 参数部分
    const { loginCode } = ctx.request.body;
    // let openid = '';
    ctx.logger.debug('Access Login: ', { loginCode });
    // ctx.logger.debug('egg curl:: ', ctx.curl);
    // 首先通过 loginCode 换取 session_key (mmp)
    const wxurl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APP_KS_PARTNER + '&secret=' + ProConf.get(APP_KS_PARTNER) +
      '&js_code=' + loginCode + '&grant_type=authorization_code';
    // 换取的结果中包含 openid 及 session_key
    const wx_result = (await ctx.curl(wxurl, { dataType: 'json' })).data;
    ctx.logger.info('wx_result => ', wx_result);
    // openid不存在的情况
    if (!wx_result.openid) {
      ctx.logger.debug('系统审核用户登录: ', wx_result.openid);
      ctx.body = new Message(ErrorType.WX_LOGIN_FAIL, wx_result);
      return;
    }

    // wx_result不包含unionid, 需要在 encryptedData 中通过 iv 解析出 unionid
    try {

      ctx.body = await ctx.service.access.partnerLogin(wx_result.openid);
    } catch (error) {
      ctx.logger.error(error);
      return ctx.body = new Message(ErrorType.WX_LOGIN_FAIL, '解析 openId 异常: ' + error);
    }

  }// end: login

  /**
   * 为合伙人端用户发送短信验证
   */
  public async partnerSMS() {
    const { ctx } = this;
    // 参数部分
    const { telephone } = ctx.request.body;

    ctx.body = await ctx.service.access.partnerSMS(telephone);
  }

  /**
   * 为合伙人端用户发送短信验证
   */
  public async partnerRegister() {
    const { ctx } = this;
    // 参数部分
    const { telephone, code, smsToken, openid } = ctx.request.body;

    ctx.body = await ctx.service.access.partnerRegister(telephone, code, smsToken, openid);
  }
}