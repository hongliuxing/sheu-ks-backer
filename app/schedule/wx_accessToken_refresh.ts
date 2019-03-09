/**
 * 用于描述与活动相关的定时任务
 * 每 115 分钟刷新公众号中的 ACCESS_TOKEN
 */
export const schedule = {
    interval: '115m',
    // cron: '*/20 * * * * *',
    immediate: true, // 配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
    type: 'worker', // run in all workers
};

export const task = async (ctx) => {
    // await ctx.service.source.update();
    // ctx.app.lastUpdateBy = 'force';
    console.log('【定时任务 wx accessToken】开始准备刷新.....');


    const APPID = 'wx18aa432769631379';
    const APPSECRET = 'a864a627dcfbcc51cb5622d322edf8cf';
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`;
    const res = await ctx.curl(url , {
      dataType: 'json',
    });

    console.log('【定时任务 wx accessToken】响应内容: ', res.data);
    // {"access_token":"ACCESS_TOKEN","expires_in":7200}
    if(res.data && res.data.access_token){
        // res.data 中包含响应数据
        ctx.app.gzhAccessToken = res.data.access_token;
    }
};