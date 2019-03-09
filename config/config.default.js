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
        dir: '../egglogs',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixrQkFBZSxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUNyQyxNQUFNLE1BQU0sR0FBRyxFQUFnQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV0QywwQ0FBMEM7SUFDMUMsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFFekMsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztLQUNqRSxDQUFDO0lBRUYsU0FBUztJQUNULE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUM3QyxNQUFNLEVBQUUsVUFBVTtRQUNsQixLQUFLLEVBQUUsWUFBWTtLQUNwQixDQUFDO0lBRUYsZUFBZTtJQUNmLE1BQU0sQ0FBQyxFQUFFLEdBQUc7UUFDVixJQUFJLEVBQUUsRUFBRztRQUNULFNBQVMsRUFBRTtZQUNULGVBQWUsRUFBRTtnQkFDZixvQkFBb0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDOUIsZ0JBQWdCLEVBQUUsRUFBRTthQUNyQjtTQUNGO0tBS0YsQ0FBQztJQUVGLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLEtBQUs7SUFFTCxrQ0FBa0M7SUFDbEMsTUFBTSxTQUFTLEdBQUc7UUFDaEIsU0FBUyxFQUFFLGlEQUFpRCxPQUFPLENBQUMsSUFBSSxFQUFFO0tBQzNFLENBQUM7SUFFRixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ2hCLElBQUksRUFBRTtZQUNKLHVFQUF1RTtZQUN2RSxvRUFBb0U7WUFDcEUsTUFBTSxFQUFFLEtBQUs7WUFDYixVQUFVLEVBQUUsSUFBSTtTQUNqQjtLQUNGLENBQUM7SUFFRiw2Q0FBNkM7SUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2Ysa0NBQWtDO1FBQ2xDLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFFcEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsdUJBQXVCO1FBRWpDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxFQUFFO1lBQ1AsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsS0FBSztTQUNaO1FBQ0QsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUNqQixPQUFPLEVBQUUsVUFBUyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FDSixDQUFDO0lBRUYsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixNQUFNLEVBQUUsR0FBRztRQUNYLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztRQUNoRCxZQUFZLEVBQUUsd0NBQXdDO0tBRXZELENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxXQUFXO1NBRXRCO0tBQ0YsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNkLG9CQUFvQjtRQUNwQixHQUFHLEVBQUUsWUFBWTtLQUNsQixDQUFDO0lBQ0Y7O09BRUc7SUFDSCxrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxLQUFLO0lBRUw7O09BRUc7SUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2YsTUFBTSxFQUFFLFVBQVU7UUFDbEIsbUJBQW1CO1FBQ25CLEdBQUcsRUFBRSxJQUFJO1FBQ1QscUJBQXFCO1FBQ3JCLEtBQUssRUFBRSxLQUFLO1FBQ1oscURBQXFEO1FBQ3JELFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQTtJQUVELG9CQUFvQjtJQUNwQix3RUFBd0U7SUFDeEUsb0NBQW9DO0lBQ3BDLEtBQUs7SUFFTCxrREFBa0Q7SUFDbEQseUJBQ0ssTUFBTSxFQUNOLFNBQVMsRUFDWjtBQUNKLENBQUMsQ0FBQyJ9