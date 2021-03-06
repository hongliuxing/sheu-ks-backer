"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 登录相关接口控制器
 */
const base_1 = require("./common/base");
class ClubmasterController extends base_1.default {
    /**
     * 社团联系人: 升降权
     * 升权: 只能提升级别差大于等于2的角色(4可以把2提升至3,但不能把3提升至4)
     * 降权: 只能降权级别差大于等于1的角色,但不能降级为0以下。（3可以降级2,但不能降级3,也不能降级至-1）
     * 升降权记录: 需做历史记录(保留三个月内)
     * 接口: /clubmaster/set-power
     * 参数:
     *      token: 用户登录凭证
     *      diff: 升降权限控制(1为升1级, -1为降一级)
     *      target_client: 目标用户
     *      club_id: 社团id
     *      updatedAt: 上次更新时间
     * 返回数据:
     *      Message {
            err: null,
            info:
            { createdAt: '2018-10-08 10:43:37',
                checked_date: '2018-10-08 10:43:37',
                id: 'f5169ce0-caa3-11e8-b0fd-5db0598f423d',
                club_id: 'ea9e88ca-ca1d-11e8-a8d2-54bf64582633',
                apply_client_id: '7b2ae580-c922-11e8-b035-35dbdc0da7bf' } }
    *
    */
    async post_setPower() {
        const { ctx } = this;
        const { diff, target_client, club_id, updatedAt } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.setContactPower({ diff, target_client, club_id, updatedAt, token });
    }
    /**
     * 用户查看自己创建社团的申请列表
     * 接口: /clubmaster/build-apply-list
     * 参数:
     *      struts: 状态, 申请中和历史 (0 和 1)
     *      pagenum: 页码
     * 返回数据:
     *      Message
     */
    async get_buildApplyList() {
        const { ctx } = this;
        const { struts, pagenum } = ctx.query;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.getBuildApplyList({ struts, pagenum, token });
    }
    /**
     * 新增/创建社团
     * 建立社团时需验证:
     * - 创建社团数量(不得大于5,正在申请数量, 及作为团长的数量)
     * - 在申请中/审核通过的状态中, 是否在当前学校有重复名字的社团
     * 接口: /clubmaster/create-club
     * 参数:
     *      school_id: 学校编号（缓存中获取）
     *      title: 社团名称
     *      club_url: 社团合影件图片url
     *      referrer: 推荐人
     * 返回数据:
     *      Message
     */
    async post_createClub() {
        const { ctx } = this;
        const { formId, school_id, title, club_url, referrer } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.createClubApply({ formId, school_id, title, club_url, referrer, token });
    }
    /**
     * 新增公告 (不允许删除)
     * 接口: /clubmaster/notice/add
     * 参数:
     *      club_id: 社团编号
     *      title: 公告标题
     *      content: 公告内容
     * 返回数据:
     *      Message
     */
    async post_notice_add() {
        const { ctx } = this;
        const { club_id, title, content } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.addNotice({ club_id, title, content, token });
    }
    /**
     * 删除公告 (实际上是修改状态为撤销)
     * 接口: /clubmaster/notice/repeal
     * 参数:
     *      club_id: 社团编号
     *      notice_id: 公告ID
     * 返回数据:
     *      Message
     */
    async post_notice_repeal() {
        const { ctx } = this;
        const { club_id, notice_id } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.repealNotice({ club_id, notice_id, token });
    }
    /**
     * 查询申请入社列表
     * 接口: /clubmaster/join-list
     * 参数:
     *      club_id: 社团id
     *      struts: 申请单状态（0 审核中 1 审核通过 -1 审核未通过）
     *      pagenum: 页码
     * 返回数据:
     *      Message
     */
    async get_joinList() {
        const { ctx } = this;
        const { club_id, struts, pagenum } = ctx.query;
        // let token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.getClubJoinList({ club_id, struts, pagenum });
    }
    /**
     * 社团申请: 批准
     * 当审核通过时, 更改club_apply表的申请状态, 及添加用户至club_contcat中
     * 接口: /clubmaster/join-ratify
     * 参数:
     *      apply_id: 申请单ID
     *      club_id: 社团编号
     *      apply_client_id: 申请者的用户id
     * 返回数据:
     *      Message
     */
    async post_joinRatify() {
        const { ctx } = this;
        const { apply_id, club_id, apply_client_id } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.joinClubRatify({ apply_id, club_id, apply_client_id, token });
    }
    /**
     * 社团申请: 拒绝
     * 接口: /clubmaster/join-reject
     * 参数:
     *      apply_id: 申请单ID
     *      club_id: 社团编号
     *      apply_client_id: 申请者的用户id
     *      reason: 拒绝理由
     * 返回数据:
     *      Message
     */
    async post_joinReject() {
        const { ctx } = this;
        const { apply_id, club_id, reason } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.joinClubReject({ apply_id, club_id, reason, token });
    }
    /** *********************************************************************************
     *
     * 社团活动相关
     *
     ********************************************************************************* */
    /**
     * 查询可管理的活动
     *  已发布: 查询结果与活动列表中的社团活动查询结果一致
        审核中/待发布: 查询简单结果
     * 接口: /clubmaster/activity-list
     * 参数:
     *      club_id: 社团id
     *      struts: 活动状态（0 待审核 -1: (-1 审核中 -2 已拒绝) 1 已发布）
     *      pagenum: 页码
     * 返回数据:
     *      Message
     */
    async get_activityList() {
        const { ctx } = this;
        const { club_id, struts, pagenum } = ctx.query;
        const token = ctx.request.header['x-access-token'];
        ctx.body = {};
        if (struts === '1') {
            // 预览完整活动数据
            ctx.body = await ctx.service.activity.getActivityFullList({ club_id, pagenum, token });
        }
        else if (struts === '0' || struts === '-1') {
            // 查看简单数据
            ctx.body = await ctx.service.clubmaster.getActivitySimpleList({ club_id, struts, pagenum });
        }
    }
    /**
     * 管理活动: 保存
     * 进入社团面板时,缓存当前所在的社团名称和id,此处获取
     * 离开页面,则删除oss中上传的配图
     * 保存之后还需要发布
     * 接口: /clubmaster/activity/save
     * 参数:
     *      activity_id: 活动id(拥有活动id说明是在修改)
     *      club_id: 社团编号
     *      title: 活动标题
     *      content: 活动内容
     *      timing: 活动时机(0 筹办期  1 活动总结 )
     *      brief_start: 活动开始时间
     *      brief_end: 活动结束时间
     *
     *      imgs: array  活动配图(最多9张)
     *          配图说明: 新增时,全部添加至 activity_pic ;
     *                   修改时,只传输需要修改的配图即可 ;
     * 返回数据:
     *      Message
     */
    async post_activity_save() {
        const { ctx } = this;
        const { activity_id, club_id, title, content, imgs, timing, brief_start, brief_end } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.saveActivity({ activity_id, club_id, title, content, imgs, timing, brief_start, brief_end, token });
    }
    /**
     * 管理活动: 发布
     * 待发布阶段,若修改,则需要重新保存, 发布按钮变灰
     * 接口: /clubmaster/activity/publish
     * 参数:
     *      activity_id: 活动id
     * 返回数据:
     *      Message
     */
    async post_activity_publish() {
        const { ctx } = this;
        const { formId, activity_id } = ctx.request.body;
        // let token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.publishActivity({ formId, activity_id });
    }
    /**
     * 管理活动: 撤销
     * 撤销后,变为待审核0状态
     * 接口: /clubmaster/activity/repeal
     * 参数:
     *      activity_id: 活动id
     * 返回数据:
     *      Message
     */
    async post_activity_repeal() {
        const { ctx } = this;
        const { activity_id } = ctx.request.body;
        // let token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.repealActivity({ activity_id });
    }
    /**
     * 删除活动照片
     * 接口: /clubmaster/activity/delete-imgs
     * 参数:
     *      activity_id: 若传递了活动id,则删除oss配图同时,删除数据库配图信息
     *      imgs: Array	配图数组
     * 返回数据:
     *      Message
     */
    async post_activity_deleteImgs() {
        const { ctx } = this;
        const { activity_id, imgs } = ctx.request.body;
        // let token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.deleteActivityPics({ activity_id, imgs });
    }
    /**
     * 修改社团资料
     * 接口: /clubmaster/modify-club
     * 参数:
     *      club_id: string  社团id
     *      title: string	社团名称
     *      logo_url: string	logo
     *      bgimg_url: string	背景图
     *      intro: string	社团介绍
     * 返回数据:
     *      Message
     */
    async post_modifyClub() {
        const { ctx } = this;
        const { club_id, title = null, logo_url = null, bgimg_url = null, intro = null } = ctx.request.body;
        const token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.modifyClubInfo({ club_id, title, logo_url, bgimg_url, intro, token });
    }
    /**
     * 查看编辑中的社团活动信息
     * 接口: /clubmaster/edit-info
     * 参数:
     *      activity_id: 活动id
     * 返回数据:
     *      Message
     */
    async get_editInfo() {
        const { ctx } = this;
        const { activity_id } = ctx.query;
        // let token = ctx.request.header['x-access-token'];
        ctx.body = await ctx.service.clubmaster.editInfo({ activity_id });
    }
}
exports.default = ClubmasterController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1Ym1hc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdWJtYXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHdDQUEyQztBQUUzQyxNQUFxQixvQkFBcUIsU0FBUSxjQUFjO0lBQzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bc0JFO0lBQ0ssS0FBSyxDQUFDLGFBQWE7UUFDdEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDckUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFaEgsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksS0FBSyxDQUFDLGtCQUFrQjtRQUMzQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBRUQ7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