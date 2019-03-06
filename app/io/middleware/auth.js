'use strict';
// const _ = require('lodash');
const PREFIX = 'room';
module.exports = () => {
    return async (ctx, next) => {
        const { socket, app } = ctx;
        const query = socket.handshake.query;
        // 用户信息
        const { room, userId } = query;
        // console.log('【socket 请求】：', query);
        // 用户加入
        socket.join(room);
        // 备注：此处 app.redis 与插件无关，可用其他存储代替
        // await app.redis.sadd(PREFIX + ':' + room, userId);
        console.log('当前加入用户：', userId);
        await next();
        // 用户离开
        socket.leave(room);
        console.log('当前离开用户：', userId);
        // await app.redis.srem(`${PREFIX}:${room}`, userId);
    };
};