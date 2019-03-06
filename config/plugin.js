"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require('path');
const plugin = {
    // 启用插件: sequelize
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    // 启用插件: cors
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    // response message
    // resmessage: {
    //   enable: true,
    //   path: path.join(__dirname, '../lib/plugin/egg-resmessage'),
    // },
    // graphQL
    graphql: {
        enable: true,
        package: 'egg-graphql',
    },
    // 静态资源插件
    static: {
        enable: true,
        package: 'egg-static',
    },
    // 启用 egg-socket.io 插件
    io: {
        enable: true,
        package: 'egg-socket.io',
    },
};
exports.default = plugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0NBQWdDO0FBRWhDLE1BQU0sTUFBTSxHQUFjO0lBRXhCLGtCQUFrQjtJQUNsQixTQUFTLEVBQUU7UUFDVCxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRSxlQUFlO0tBQ3pCO0lBQ0QsYUFBYTtJQUNiLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFLFVBQVU7S0FDcEI7SUFDRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUsS0FBSztJQUVMLFVBQVU7SUFDVixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRSxhQUFhO0tBQ3ZCO0lBRUQsU0FBUztJQUNULE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFLFlBQVk7S0FDdEI7SUFFRCxzQkFBc0I7SUFDdEIsRUFBRSxFQUFFO1FBQ0YsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsZUFBZTtLQUN6QjtDQWtCRixDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIn0=