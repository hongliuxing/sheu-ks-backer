"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let path = require('path');
exports.default = (appInfo) => {
    const config = {};
    console.log('【ENV】========> default');
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_20181105';
    // add your egg config in here
    config.middleware = ['xtoken', 'csrfauth', 'graphql'];
    config.xtoken = {
        ignore: ['/index', '/access/partnerLogin', '/assets', '/global'],
    };
    // {app_root}/config/config.default.js
    config.wechatApi = {
        appId: 'wx18aa432769631379',
        appSecret: 'a864a627dcfbcc51cb5622d322edf8cf',
    };
    // 配置静态资源
    config.static = {
        maxAge: 31536000,
        dir: path.join(appInfo.baseDir, 'app/assets'),
        prefix: '/assets/',
        index: 'index.html',
    };
    // 配置 socket.io
    config.io = {
        init: {},
        namespace: {
            '/io-listening': {
                connectionMiddleware: ['auth'],
                packetMiddleware: [],
            },
        },
    };
    // config.resmessage = {
    //   f1: 'f1_value',
    //   f2: 'f2_value'
    // };
    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    config.security = {
        csrf: {
            // headerName: 'x-access-token', // 通过 query 传递 CSRF token 的默认字段为 _csrf
            // bodyName: 'x-access-token', // 通过 body 传递 CSRF token 的默认字段为 _csrf
            enable: false,
            ignoreJSON: true,
        },
    };
    // add sesquelize database connections config
    config.sequelize = {
        dialect: 'mysql',
        // host: '101.201.239.227',
        // port: 53306,
        // database: 'luv_db', //'luv_db',
        // username: 'root',
        // password: 'root',
        host: '39.104.190.35',
        port: 53306,
        database: 'luv_db',
        username: 'baihaiou9',
        password: 'sHeuN.DaTAbasE201.810',
        timezone: '+08:00',
        pool: {
            max: 10,
            min: 1,
            idle: 10000,
        },
        retry: { max: 3 },
        logging: function (sql) {
            console.log('【SQL】 => ', sql);
        },
    };
    // config for cors
    config.cors = {
        origin: '*',
        allowHeaders: ['x-access-token', 'x-csrf-token'],
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    /**
     * 配置服务器启动项
     */
    config.cluster = {
        listen: {
            port: 18006,
            hostname: '127.0.0.1',
        },
    };
    /**
     * 配置日志位置
     */
    config.logger = {
        // 相对config文件夹的上一级目录
        dir: '../log-xiaopu',
    };
    /**
     * 配置 视图引擎
     */
    // config.view = {
    //   // root: path.join(appInfo.baseDir, 'app/assets'),
    //   defaultViewEngine: 'nunjucks',
    //   mapping: {
    //       '.nj': 'nunjucks',
    //   },
    // };
    /**
     * 配置 GraphQL
     */
    config.graphql = {
        router: '/graphql',
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
        // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
        graphiql: true,
    };
    // config.assets = {
    //   templatePath: path.join(appInfo.baseDir, 'app/view/template.html'),
    //   templateViewEngine: 'nunjucks',
    // };
    // the return config will combines to EggAppConfig
    return Object.assign({}, config, bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixrQkFBZSxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUNyQyxNQUFNLE1BQU0sR0FBRyxFQUFnQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV0QywwQ0FBMEM7SUFDMUMsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFFekMsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztLQUNqRSxDQUFDO0lBRUYsc0NBQXNDO0lBQ3RDLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDakIsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixTQUFTLEVBQUUsa0NBQWtDO0tBQzlDLENBQUM7SUFFRixTQUFTO0lBQ1QsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQzdDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLEtBQUssRUFBRSxZQUFZO0tBQ3BCLENBQUM7SUFFRixlQUFlO0lBQ2YsTUFBTSxDQUFDLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSxFQUFHO1FBQ1QsU0FBUyxFQUFFO1lBQ1QsZUFBZSxFQUFFO2dCQUNmLG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUM5QixnQkFBZ0IsRUFBRSxFQUFFO2FBQ3JCO1NBQ0Y7S0FLRixDQUFDO0lBRUYsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsS0FBSztJQUVMLGtDQUFrQztJQUNsQyxNQUFNLFNBQVMsR0FBRztRQUNoQixTQUFTLEVBQUUsaURBQWlELE9BQU8sQ0FBQyxJQUFJLEVBQUU7S0FDM0UsQ0FBQztJQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFO1lBQ0osdUVBQXVFO1lBQ3ZFLG9FQUFvRTtZQUNwRSxNQUFNLEVBQUUsS0FBSztZQUNiLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLDZDQUE2QztJQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUVwQixJQUFJLEVBQUUsZUFBZTtRQUNyQixJQUFJLEVBQUUsS0FBSztRQUNYLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSx1QkFBdUI7UUFFakMsUUFBUSxFQUFFLFFBQVE7UUFDbEIsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxLQUFLO1NBQ1o7UUFDRCxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxVQUFTLEdBQUc7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNKLENBQUM7SUFFRixrQkFBa0I7SUFDbEIsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLE1BQU0sRUFBRSxHQUFHO1FBQ1gsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO1FBQ2hELFlBQVksRUFBRSx3Q0FBd0M7S0FFdkQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLFdBQVc7U0FFdEI7S0FDRixDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNLENBQUMsTUFBTSxHQUFHO1FBQ2Qsb0JBQW9CO1FBQ3BCLEdBQUcsRUFBRSxlQUFlO0tBQ3JCLENBQUM7SUFDRjs7T0FFRztJQUNILGtCQUFrQjtJQUNsQix1REFBdUQ7SUFDdkQsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLEtBQUs7SUFFTDs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixNQUFNLEVBQUUsVUFBVTtRQUNsQixtQkFBbUI7UUFDbkIsR0FBRyxFQUFFLElBQUk7UUFDVCxxQkFBcUI7UUFDckIsS0FBSyxFQUFFLEtBQUs7UUFDWixxREFBcUQ7UUFDckQsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFBO0lBRUQsb0JBQW9CO0lBQ3BCLHdFQUF3RTtJQUN4RSxvQ0FBb0M7SUFDcEMsS0FBSztJQUVMLGtEQUFrRDtJQUNsRCx5QkFDSyxNQUFNLEVBQ04sU0FBUyxFQUNaO0FBQ0osQ0FBQyxDQUFDIn0=