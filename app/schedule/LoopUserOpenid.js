/**
 * 用于描述与活动相关的定时任务
 * 兜底方案一：每10分钟刷新活动数据
 */
const uuidv1 = require('uuid/v1');

module.exports = {
    schedule: {
        interval: '30m',
        // cron: '*/20 * * * * *',
        immediate: true, // 配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
        type: 'worker', // run in all workers
    },

    async task(ctx) {

        try{
            console.log('〓 公众号开始刷新用户... ');
            const sheuwx_access_url = `https://www.sh-e.cn/global/sheugzhAccessToken`;
            const access_token_res = await ctx.curl(sheuwx_access_url , {
                method: 'POST',
                dataType: 'json',
            });
            const {access_token} = access_token_res.data || {access_token: null};
            console.log('〓 公众号access_token... ', access_token_res);
            if(!access_token){
                ctx.logger.error('〓 1. gzhAccessToken is null...');
                return console.log('〓 1. gzhAccessToken is null...');
            }
            const getUsersUrl = `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${access_token}`;
            const users_res = await ctx.curl(getUsersUrl , {
                dataType: 'json',
            });
            const users = users_res.data && users_res.data.data && users_res.data.data.openid;
            console.log('〓 公众号用户[微信获取]: ', users_res);
            if(!users || !Array.isArray(users) || !users.length){
                ctx.logger.error('〓 2. gzhAccessToken users length...');
                return console.log('〓 2. gzhAccessToken users length...');
            }
            // 过滤筛选不需要继续进行写入的用户
            const sheuUsersMap = ctx.app.sheuUsersMap || new Map();
            console.log('〓 3. 公众号用户[数据库存储]: ', sheuUsersMap.size);
            ctx.logger.info('〓 3. 公众号用户[数据库存储]: ', sheuUsersMap.size);
        
            let willWriteUser = [];
            users.forEach((useropenid) => {
                if(useropenid && !sheuUsersMap.get(useropenid)){
                    // 表示用户不在数据库中
                    willWriteUser.push(useropenid);
                }
            });
            ctx.logger.info('〓 4. 公众号用户[待写入用户]: ', willWriteUser.length);
            console.log('〓 公众号用户[待写入用户]: ', willWriteUser.length);
            // 循环获取用户的 unionid
            for(let openid of willWriteUser){
                const userInfoUrl = `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${access_token}&openid=${openid}&lang=zh_CN`;
                const user_info_res = await ctx.curl(userInfoUrl , {
                    dataType: 'json',
                });
                // console.log('〓 公众号用户[user_info_res]: ', user_info_res);
                if(user_info_res.data){
                    // 查到了用户, 则写入数据库
                    const sheu_user = user_info_res.data;
                    if(sheu_user.openid){
                        ctx.logger.info('〓 4. 公众号用户[真正写入用户]: ', sheu_user.unionid);
                        console.log('〓 公众号用户[写入用户]: ', sheu_user.unionid);
                        delete sheu_user.tagid_list;
                        sheu_user.id = uuidv1();
                        // console.log('用户ID::: ', sheu_user.id);
                        const sheu_ok = await ctx.model.SheuUser.findOrCreate({
                            where: {
                                openid: sheu_user.openid,
                                unionid: sheu_user.unionid,
                            },
                            defaults: sheu_user,
                        });
                        if(sheu_ok){
                            sheuUsersMap.set(sheu_user.openid, sheu_user.unionid);
                        }else{
                            ctx.logger.error('〓 5. 公众号用户[user not write]: ', sheu_ok);
                            console.log('〓 公众号用户[user not write]: ', sheu_ok);
                        }
                    }
                }else{
                    ctx.logger.error('〓 6. 公众号用户[数user_info_res.data is null]: ', user_info_res);
                    console.log('〓 6. 公众号用户[user_info_res.data is null]: ', user_info_res);
                }

                // 重新缓存 sheuUsersMap
                ctx.app.sheuUsersMap = sheuUsersMap;
            }
        }catch(err){
            console.log('〓 公众号用户[err]: ', err);
            ctx.logger.error(err);
        }
    
    
    }, // end
};