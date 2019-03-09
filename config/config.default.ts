import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
let path = require('path');

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
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
    init: { }, // passed to engine.io
    namespace: {
      '/io-listening': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379
    // }
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
      database: 'luv_db', //'luv_db',
      username: 'baihaiou9', //'root',
      password: 'sHeuN.DaTAbasE201.810', //'root',

      timezone: '+08:00',
      pool: {
        max: 10,
        min: 1,
        idle: 10000,
      },
      retry: { max: 3 },
      logging: function(sql) {
        console.log('【SQL】 => ', sql);
      },
  };

  // config for cors
  config.cors = {
    origin: '*',
    allowHeaders: ['x-access-token', 'x-csrf-token'],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // credentials: true,
  };
  /**
   * 配置服务器启动项
   */
  config.cluster = {
    listen: {
      port: 18006,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
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
  }

  // config.assets = {
  //   templatePath: path.join(appInfo.baseDir, 'app/view/template.html'),
  //   templateViewEngine: 'nunjucks',
  // };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
