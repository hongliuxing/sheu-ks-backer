/**
 * 全局支持的API工具
 */
const sha1 = require('sha1');
import BaseController from './common/base';

const config = {
    wechat: {
        appID: 'wx18aa432769631379', //填写你自己的appID
        appSecret: 'a864a627dcfbcc51cb5622d322edf8cf',  //填写你自己的appSecret
        EncodingAESKey: 'tZHiMcrZdPfVxjO717QQvg7fHMj0OjgUG6hHcKweqBD',
        token: 'sheyou',  //填写你自己的token
    },
};

export default class GlobalSupportController extends BaseController {

    /**
     * 微信接入
     * https://www.sh-e.cn/global/sheuIn
     * global/sheuIn
     */
    public async getSheuGZHIn() {
        const { ctx } = this;

        const token = config.wechat.token;
        console.log('微信接入 ====> ', ctx.query);
        const signature = ctx.query.signature;
        const nonce = ctx.query.nonce;
        const timestamp = ctx.query.timestamp;
        const echostr = ctx.query.echostr;
        const str = [token, timestamp, nonce].sort().join(''); //按字典排序，拼接字符串
        console.log('微信排序拼接字符串: ', str);
        const sha = sha1(str); //加密
        ctx.body = (sha === signature) ? echostr + '' : 'failed';  //比较并返回结果
    }

    /**
     * 用于获取 社有公众号 的 accesstoken
     * 接口: /global/sheugzhAccessToken
     * 参数:
     *
     * 返回数据:
     *
     */
    public async getSheuGZHAccessToken() {
        const { ctx } = this;

        let msg = {};
        const accessToken = ctx.app['gzhAccessToken'];
        if (!accessToken){
            msg = {
                err : 9527,
                data: 'accessToken无效',
            };
        }else{
            msg = {
                access_token: accessToken,
                expires_in: 7200,
            };
        }
        ctx.body = msg;
    }
}