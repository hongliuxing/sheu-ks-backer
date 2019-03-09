"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用于描述与活动相关的定时任务
 * 每 115 分钟刷新公众号中的 ACCESS_TOKEN
 */
exports.schedule = {
    // interval: '60m',
    cron: '* * */1 * * *',
    immediate: true,
    type: 'worker',
};
exports.task = async (ctx) => {
    // await ctx.service.source.update();
    // ctx.app.lastUpdateBy = 'force';
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
        ctx.app.gzhAccessToken = res.data.access_token;
        ctx.logger.info('〓〓〓〓〓〓 2. 刷新token结束, 新的token是: 〓〓〓〓〓', ctx.app.gzhAccessToken);
    }
    else {
        ctx.logger.error('〓〓〓〓〓〓 3. 刷新token发生错误, 原因: 〓〓〓〓〓', res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hfYWNjZXNzVG9rZW5fcmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInd4X2FjY2Vzc1Rva2VuX3JlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0dBR0c7QUFDVSxRQUFBLFFBQVEsR0FBRztJQUNwQixtQkFBbUI7SUFDbkIsSUFBSSxFQUFFLGVBQWU7SUFDckIsU0FBUyxFQUFFLElBQUk7SUFDZixJQUFJLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlCLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBR2hELE1BQU0sS0FBSyxHQUFHLG9CQUFvQixDQUFDO0lBQ25DLE1BQU0sU0FBUyxHQUFHLGtDQUFrQyxDQUFDO0lBQ3JELE1BQU0sR0FBRyxHQUFHLDhFQUE4RSxLQUFLLFdBQVcsU0FBUyxFQUFFLENBQUM7SUFDdEgsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRztRQUMvQixRQUFRLEVBQUUsTUFBTTtLQUNqQixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELG9EQUFvRDtJQUNwRCxJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUM7UUFDakMsbUJBQW1CO1FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDbkY7U0FBSTtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdEO0FBQ0wsQ0FBQyxDQUFDIn0=