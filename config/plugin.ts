import { EggPlugin } from 'egg';
// const path = require('path');

const plugin: EggPlugin = {

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

  // 启用插件 egg-view-assets, 做静态资源模板
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },

  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // view: {
  //   enable: true,
  //   package: 'egg-view',
  // },
};

export default plugin;
