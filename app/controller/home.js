"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./common/base");
class HomeController extends base_1.default {
    async index() {
        const { ctx } = this;
        // ctx.body = await ctx.service.test.sayHi('egg');
        await ctx.render('index.html');
    }
    async testGet() {
        const { ctx, app } = this;
        // console.log('Home Controller => ', ctx.helper.resmessage('a error', 'maybe this is a error!'));
        console.log('Home Controller => ', app['resmessage']('a error', 'maybe this is a error!'));
        ctx.body = `我收到了参数：${Object.assign({}, ctx.query)}`;
    }
    async testPost() {
        const { ctx, app } = this;
        console.log('Post Request Body:::', ctx.request.body);
        // console.log('Home Controller => ', ctx.helper.resmessage('a error', 'maybe this is a error!'));
        console.log('Home Controller => ', app['resmessage']('a error', 'maybe this is a error!'));
        // ctx.body = `我收到了参数：${ {...ctx.request.body} }`;
        ctx.body = { data: `我收到了参数：${ctx.request.body}` };
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsY0FBZSxTQUFRLGNBQWM7SUFDeEQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtEQUFrRDtRQUNsRCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGtHQUFrRztRQUNsRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVyxrQkFBSSxHQUFHLENBQUMsS0FBSyxDQUFFLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVE7UUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELGtHQUFrRztRQUNsRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLGtEQUFrRDtRQUNsRCxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLFVBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFLLEVBQUUsRUFBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQXRCRCxpQ0FzQkMifQ==