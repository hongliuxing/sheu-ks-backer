"use strict";
// app.js
// import https from 'https';
// import fs from 'fs';
// let enforceHttps = require('koa-sslify');
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 框架提供了统一的入口文件（app.js）进行启动过程自定义，这个文件只返回一个函数。
 * 注意：在 beforeStart 中不建议做太耗时的操作，框架会有启动的超时检测。
 */
exports.default = (app) => {
    app.messenger.on('refresh_wx_access_token', (data) => {
        app.logger.info('======== 【扩展类型定时任务】: 2. 分发新的 wx_access_token... %s', data);
        // create an anonymous context to access service
        // const ctx = app.createAnonymousContext();
        // ctx.runInBackground(async () => {
        //     await ctx.service.source.update();
        //     app.lastUpdateBy = data;
        // });
        app.logger.info('======== 【扩展类型定时任务】: 3. 当前 gzhAccessToken: %s', app.gzhAccessToken);
        if (!data)
            return;
        app.gzhAccessToken = data;
    });
    // Force HTTPS on all page
    // app.use(enforceHttps());
    // let ssl_option = {
    //     key: fs.readFileSync('./cert/cert-1540222230559_she-u.cn.key'),
    //     cert: fs.readFileSync('./cert/cert-1540222230559_she-u.cn.crt')
    // };
    // app.get('/global/sheuIn', function* (this: any) {
    //     console.log('微信开始接入 ====> ');
    //     const { wechatApi } = app;
    //     try {
    //       const ticket = yield wechatApi.getTicket();
    //       console.log('微信排序拼接字符串[ticket]: ', ticket);
    //       this.status = 200;
    //       this.body = ticket;
    //     } catch (error) {
    //       this.status = 500;
    //       this.body = error;
    //     }
    // });
    /**
     * 自定义初始化方式
     */
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        // app.cities = await app.curl('http://example.com/city.json', {
        //     method: 'GET',
        //     dataType: 'json',
        // });
        // console.log('【app】=> ', app.config);
        // 也可以通过以下方式来调用 Service
        // const ctx = app.createAnonymousContext();
        // app.cities = await ctx.service.cities.load();
    });
    app.on('error', (err, ctx) => {
        // report error
        ctx.logger.error('【onError】 => ', err);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTO0FBQ1QsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2Qiw0Q0FBNEM7O0FBRTVDOzs7R0FHRztBQUNILGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFFbkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxnREFBZ0Q7UUFDaEQsNENBQTRDO1FBQzVDLG9DQUFvQztRQUNwQyx5Q0FBeUM7UUFDekMsK0JBQStCO1FBQy9CLE1BQU07UUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUUzQixxQkFBcUI7SUFDckIsc0VBQXNFO0lBQ3RFLHNFQUFzRTtJQUN0RSxLQUFLO0lBRUwsb0RBQW9EO0lBRXBELG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLG9EQUFvRDtJQUNwRCxvREFBb0Q7SUFDcEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsTUFBTTtJQUVOOztPQUVHO0lBQ0gsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2QixtQkFBbUI7UUFDbkIsZ0VBQWdFO1FBQ2hFLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsTUFBTTtRQUVOLHVDQUF1QztRQUV2Qyx1QkFBdUI7UUFDdkIsNENBQTRDO1FBQzVDLGdEQUFnRDtJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3pCLGVBQWU7UUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==