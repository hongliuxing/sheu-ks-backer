"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用于描述与活动相关的定时任务
 * 兜底方案一：每10分钟刷新活动数据
 */
exports.schedule = {
    interval: '10m',
    // cron: '*/20 * * * * *',
    type: 'worker',
};
exports.task = async () => {
    // await ctx.service.source.update();
    // ctx.app.lastUpdateBy = 'force';
    console.log('执行了一个定时任务.....');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHlfZm9yY2VfcmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5X2ZvcmNlX3JlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0dBR0c7QUFDVSxRQUFBLFFBQVEsR0FBRztJQUNwQixRQUFRLEVBQUUsS0FBSztJQUNmLDBCQUEwQjtJQUMxQixJQUFJLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDM0IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDIn0=