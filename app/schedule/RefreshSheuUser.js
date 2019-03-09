/**
 * 用于描述与活动相关的定时任务
 * 兜底方案一：每10分钟刷新活动数据
 */
module.exports = {
    schedule: {
        interval: '24h',
        // cron: '*/20 * * * * *',
        immediate: true, // 配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
        type: 'worker', // run in all workers
    },

    async task(ctx) {

        try {
            const sheuUsers = await ctx.model.SheuUser.findAll({});
            // console.log('〓〓〓〓 获取公众号用户列表... ', sheuUsers);
            const userMap = new Map();
            if (Array.isArray(sheuUsers)) {
                sheuUsers.forEach((user) => {
                    userMap.set(user.openid, user.unionid);
                });
            }
            ctx.app.sheuUsersMap = userMap;
        } catch (err) {
            ctx.logger.error(err);
        }

    },
}