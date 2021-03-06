"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient = require("../http-client");
/**
 * 发送【评论相关的】模板消息
 */
exports.sendCommentTemplate = async (formId, openid, title, aid, struts, reason) => {
    const sendData = {
        'keyword1': { value: title },
        'keyword2': { value: (struts == 1 ? '评论成功' : '评论失败') },
        'keyword3': { value: '点击查看详情' },
    };
    if (struts == 0 && reason) {
        sendData['keyword3'] = { value: reason };
    }
    HttpClient.sendTemplateMessage({
        touser: openid,
        template_id: 'o77NsZ4uLBUUnzTXFoYSXWfSEoboHUWVlCktcijuCgw',
        page: 'pages/activity/info/info?id=' + aid + '&share=true',
        form_id: formId,
        data: sendData,
        emphasis_keyword: null,
    }).then((res) => {
        console.log('sendTemplateMessage res: ', res);
    }).catch((err) => {
        console.log('sendTemplateMessage err: ', err);
    });
};
/**
 * 发送【设置学校相关的】模板消息
 */
exports.sendSchoolTemplate = async (formId, openid, school, struts, reason) => {
    const sendData = {
        'keyword1': { value: '设置学校申请：' + school },
        'keyword2': { value: (struts == 1 ? '审核通过' : '未通过') },
        'keyword3': { value: '点击查看详情' },
    };
    if (struts == 0 && reason) {
        sendData['keyword3'] = { value: reason };
    }
    HttpClient.sendTemplateMessage({
        touser: openid,
        template_id: 'V2PF_GfwJuYBXkY54hFYivKHa1313zqJTJH37NT4jIw',
        page: 'pages/mine/mine',
        form_id: formId,
        data: sendData,
        emphasis_keyword: null,
    }).then((res) => {
        console.log('sendTemplateMessage res: ', res);
    }).catch((err) => {
        console.log('sendTemplateMessage err: ', err);
    });
};
/**
 * 发送【创建社团相关的】模板消息
 */
exports.sendClubBuildTemplate = async (formId, openid, school, clubname, struts, reason) => {
    const sendData = {
        'keyword1': { value: '创建社团申请' },
        'keyword2': { value: clubname },
        'keyword3': { value: school },
        'keyword4': { value: (struts == 1 ? '审核通过' : '未通过') },
        'keyword5': { value: '点击查看详情' },
    };
    if (struts == 0 && reason) {
        sendData['keyword5'] = { value: reason };
    }
    HttpClient.sendTemplateMessage({
        touser: openid,
        template_id: 'Sa77mt6JEhCNiKkwPy2Vb6d62ZlV3RimwlTze2lj0C4',
        page: 'pages/mine/mine',
        form_id: formId,
        data: sendData,
        emphasis_keyword: null,
    }).then((res) => {
        console.log('sendTemplateMessage res: ', res);
    }).catch((err) => {
        console.log('sendTemplateMessage err: ', err);
    });
};
/**
 * 发送【加入社团申请审核】模板消息
 */
exports.sendClubJoinTemplate = async (formId, openid, school, clubname, struts, reason) => {
    const sendData = {
        'keyword1': { value: '申请加入社团' },
        'keyword2': { value: clubname },
        'keyword3': { value: school },
        'keyword4': { value: (struts == 1 ? '审核通过' : '未通过') },
        'keyword5': { value: '点击查看详情' },
    };
    if (struts == 0 && reason) {
        sendData['keyword5'] = { value: reason };
    }
    HttpClient.sendTemplateMessage({
        touser: openid,
        template_id: 'Sa77mt6JEhCNiKkwPy2Vb6d62ZlV3RimwlTze2lj0C4',
        page: 'pages/mine/mine',
        form_id: formId,
        data: sendData,
        emphasis_keyword: null,
    }).then((res) => {
        console.log('sendTemplateMessage res: ', res);
    }).catch((err) => {
        console.log('sendTemplateMessage err: ', err);
    });
};
/**
 * 发送【活动发布】模板消息
 */
exports.sendActivityTemplate = async (formId, openid, title, struts, reason) => {
    const sendData = {
        'keyword1': { value: '活动发布申请' },
        'keyword2': { value: title },
        'keyword3': { value: (struts == 1 ? '审核通过' : '未通过') },
        'keyword4': { value: '点击查看详情' },
    };
    if (struts == 0 && reason) {
        sendData['keyword4'] = { value: reason };
    }
    HttpClient.sendTemplateMessage({
        touser: openid,
        template_id: 'Sa77mt6JEhCNiKkwPy2Vb58roGbF0mQHcGFbs_vA7XE',
        page: 'pages/mine/mine',
        form_id: formId,
        data: sendData,
        emphasis_keyword: null,
    }).then((res) => {
        console.log('sendTemplateMessage res: ', res);
    }).catch((err) => {
        console.log('sendTemplateMessage err: ', err);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlbXBsYXRlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNkM7QUFDN0M7O0dBRUc7QUFDVSxRQUFBLG1CQUFtQixHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3BGLE1BQU0sUUFBUSxHQUFHO1FBQ2IsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQztRQUMxQixVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQ2xELFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7S0FDbEMsQ0FBQztJQUNGLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUM7UUFDdEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO0tBQzFDO0lBQ0QsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBQzNCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxJQUFJLEVBQUUsOEJBQThCLEdBQUcsR0FBRyxHQUFHLGFBQWE7UUFDMUQsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLGdCQUFnQixFQUFFLElBQUk7S0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENB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