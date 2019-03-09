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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsU3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbFN1cHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3Qix3Q0FBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQUc7SUFDWCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFNBQVMsRUFBRSxrQ0FBa0M7UUFDN0MsY0FBYyxFQUFFLDZDQUE2QztRQUM3RCxLQUFLLEVBQUUsUUFBUTtLQUNsQjtDQUNKLENBQUM7QUFFRixNQUFxQix1QkFBd0IsU0FBUSxjQUFjO0lBRS9EOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsWUFBWTtRQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUUsU0FBUztJQUN4RSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FBQyxxQkFBcUI7UUFDOUIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUMsSUFBRyxDQUFDLFdBQVcsRUFBQztZQUNaLEdBQUcsR0FBRztnQkFDRixHQUFHLEVBQUcsSUFBSTtnQkFDVixJQUFJLEVBQUUsZUFBZTthQUN4QixDQUFDO1NBQ0w7YUFBSTtZQUNELEdBQUcsR0FBRztnQkFDRixZQUFZLEVBQUUsV0FBVztnQkFDekIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztTQUNMO1FBQ0QsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBL0NELDBDQStDQyJ9