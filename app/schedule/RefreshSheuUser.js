"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用于描述与活动相关的定时任务
 * 兜底方案一：每10分钟刷新活动数据
 */
exports.schedule = {
    interval: '24h',
    // cron: '*/20 * * * * *',
    immediate: true,
    type: 'worker',
};
exports.task = async (ctx) => {
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
    }
    catch (err) {
        ctx.logger.error(err);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmcmVzaFNoZXVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVmcmVzaFNoZXVVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBQ1UsUUFBQSxRQUFRLEdBQUc7SUFDcEIsUUFBUSxFQUFFLEtBQUs7SUFDZiwwQkFBMEI7SUFDMUIsU0FBUyxFQUFFLElBQUk7SUFDZixJQUFJLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRTlCLElBQUc7UUFDQyxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxnREFBZ0Q7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7S0FDbEM7SUFBQSxPQUFNLEdBQUcsRUFBQztRQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0FBRUwsQ0FBQyxDQUFDIn0=