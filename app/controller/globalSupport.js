"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全局支持的API工具
 */
const sha1 = require('sha1');
const base_1 = require("./common/base");
const config = {
    wechat: {
        appID: 'wx18aa432769631379',
        appSecret: 'a864a627dcfbcc51cb5622d322edf8cf',
        EncodingAESKey: 'tZHiMcrZdPfVxjO717QQvg7fHMj0OjgUG6hHcKweqBD',
        token: 'sheyou',
    }
};
class GlobalSupportController extends base_1.default {
    /**
     * 微信接入
     * https://www.sh-e.cn/global/sheuIn
     * global/sheuIn
     */
    async getSheuGZHIn() {
        const { ctx } = this;
        var token = config.wechat.token;
        console.log('微信接入 ====> ', ctx.query);
        var signature = ctx.query.signature;
        var nonce = ctx.query.nonce;
        var timestamp = ctx.query.timestamp;
        var echostr = ctx.query.echostr;
        var str = [token, timestamp, nonce].sort().join(''); //按字典排序，拼接字符串
        console.log('微信排序拼接字符串: ', str);
        var sha = sha1(str); //加密
        ctx.body = (sha === signature) ? echostr + '' : 'failed'; //比较并返回结果
    }
    /**
     * 用于获取 社有公众号 的 accesstoken
     * 接口: /global/sheugzhAccessToken
     * 参数:
     *
     * 返回数据:
     *
     */
    async getSheuGZHAccessToken() {
        const { ctx } = this;
        let msg = {};
        const accessToken = ctx.app['gzhAccessToken'];
        if (!accessToken) {
            msg = {
                err: 9527,
                data: 'accessToken无效',
            };
        }
        else {
            msg = {
                access_token: accessToken,
                expires_in: 7200,
            };
        }
        ctx.body = msg;
    }
}
exports.default = GlobalSupportController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsU3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbFN1cHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3Qix3Q0FBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQUc7SUFDWCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFNBQVMsRUFBRSxrQ0FBa0M7UUFDN0MsY0FBYyxFQUFFLDZDQUE2QztRQUM3RCxLQUFLLEVBQUUsUUFBUTtLQUNsQjtDQUNKLENBQUM7QUFFRixNQUFxQix1QkFBd0IsU0FBUSxjQUFjO0lBRS9EOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsWUFBWTtRQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFFLFNBQVM7SUFDeEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxLQUFLLENBQUMscUJBQXFCO1FBQzlCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDWixHQUFHLEdBQUc7Z0JBQ0YsR0FBRyxFQUFHLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLGVBQWU7YUFDeEIsQ0FBQztTQUNMO2FBQUk7WUFDRCxHQUFHLEdBQUc7Z0JBQ0YsWUFBWSxFQUFFLFdBQVc7Z0JBQ3pCLFVBQVUsRUFBRSxJQUFJO2FBQ25CLENBQUM7U0FDTDtRQUNELEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQWhERCwwQ0FnREMifQ==