/**
 * 用于描述与活动相关的定时任务
 * 每 115 分钟刷新公众号中的 ACCESS_TOKEN
 */
module.exports = {
    schedule: {
        interval: '90m',
        // cron: '* * */1 * * *',
        immediate: true, // 配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
        type: 'worker', // run in all workers
    },

    async task(ctx) {
        // await ctx.service.source.update();
        // ctx.app.lastUpdateBy = 'force';
        const {app} = ctx;

        // ctx.logger.info('======== 【扩展类型定时任务】: 0. 定时刷新之前 gzhAccessToken: %s', app.gzhAccessToken);

        // const rand = Math.random();
        // ctx.logger.info('======== 【扩展类型定时任务】: 1. 执行定时任务刷新token: %s', rand);

        

        console.log('【定时任务 wx accessToken】开始准备刷新.....');


        const APPID = 'wx18aa432769631379';
        const APPSECRET = 'a864a627dcfbcc51cb5622d322edf8cf';
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`;
        const res = await ctx.curl(url, {
            dataType: 'json',
        });

        ctx.logger.info('〓〓〓〓〓〓 1. 开始刷新token, 原始token是: 〓〓〓〓〓', ctx.app.gzhAccessToken);
        console.log('【定时任务 wx accessToken】响应内容: ', res.data);
        // {"access_token":"ACCESS_TOKEN","expires_in":7200}
        if (res.data && res.data.access_token) {
            // res.data 中包含响应数据
            // ctx.app.gzhAccessToken = res.data.access_token;
            ctx.app.gzhAccessToken = res.data.access_token;
            // 将新的 wx_access_token 分发给所有的 app
            ctx.app.messenger.sendToApp('refresh_wx_access_token', res.data.access_token);
            ctx.logger.info('〓〓〓〓〓〓 2. 刷新token结束, 新的token是: 〓〓〓〓〓', ctx.app.gzhAccessToken);
        } else {
            ctx.logger.error('〓〓〓〓〓〓 3. 刷新token发生错误, 原因: 〓〓〓〓〓', res);
        }
    },
}