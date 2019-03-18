"use strict";
/**
 * Agent Worker
 * 用于执行 多进程中需要统一处理的事务
 * 启动优先级优于 Worker
 */
// const Subscriber = require('./lib/subscriber');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (agent) => {
    // 在这里写你的初始化逻辑
    console.log('Agent Worker ready: ', agent);
    // 也可以通过 messenger 对象发送消息给 App Worker
    // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
    // agent.messenger.on('egg-ready', () => {
    //     const data = { ... };
    //     agent.messenger.sendToApp('xxx_action', data);
    // });
    // 扩展定时任务类型, 统一获取微信 access_token, 派发给子进程装载值
    // 订阅其他的分布式调度服务发送的消息，收到消息后让一个进程执行定时任务
    // 用户在定时任务的 schedule 配置中来配置分布式调度的场景（scene）
    // class CustomStrategy extends agent.ScheduleStrategy {
    //     schedule: {
    //         interval: '30s',
    //         immediate: true,
    //         scene: 'wx_access_token',
    //     }
    //     start() {
    //       // such as mq / redis subscribe
    //         if(agent.notify){
    //             agent.notify.subscribe(this.schedule.scene, data => {
    //                     this.ctx.logger.info('======== 【扩展类型定时任务】: 2. 分发...', data);
    //                     this.sendAll(data);
    //             });
    //         }
    //         agent.logger.info('======== 【扩展类型定时任务】: 2.2. agent对象:' + JSON.stringify(agent));
    //     }
    // }
    // agent.logger.info('======== 【扩展类型定时任务】: 1. 订阅任务...');
    // agent.schedule.use('wx_access_token', CustomStrategy);
    // const subscriber = new Subscriber();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQUNILGtEQUFrRDs7QUFFbEQsa0JBQWUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNyQixjQUFjO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUzQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIscURBQXFEO0lBQ3JELE1BQU07SUFFTiwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyx3REFBd0Q7SUFFeEQsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLFFBQVE7SUFFUixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1QixvRUFBb0U7SUFDcEUsbUZBQW1GO0lBQ25GLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJGQUEyRjtJQUMzRixRQUFRO0lBQ1IsSUFBSTtJQUVKLHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFFekQsdUNBQXVDO0FBRTNDLENBQUMsQ0FBQyJ9