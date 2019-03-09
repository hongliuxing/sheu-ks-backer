"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用于格式化日期: yyyy-MM-dd HH:mm:ss
 * 如果某一位(日期或时间)是一个数字,则在之前补 0
 */
exports.formartDateTime = (originDate = new Date(), hasTime = true) => {
    if (typeof originDate === 'string') {
        originDate = new Date(originDate);
    }
    // get originDate's yyyy-MM-dd
    const fDate = [
        originDate.getFullYear(), originDate.getMonth() + 1, originDate.getDate()
    ];
    // 如果需要对时间进行格式化, 则获取时间部分
    const fTime = hasTime ? [originDate.getHours(), originDate.getMinutes(), originDate.getSeconds()] : [];
    // 如果某一位(日期或时间)是一个数字,则在之前补 0
    const formatText = (e) => ('' + e)[1] ? '' + e : '0' + e;
    const dateText = fDate.map(formatText).join('-');
    const timeText = fTime.map(formatText).join(':');
    // 拼接并返回结果
    return dateText.concat(hasTime ? ' ' + timeText : '');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS1mb3JtYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsQ0FBQyxhQUE0QixJQUFJLElBQUksRUFBRSxFQUFFLFVBQW1CLElBQUksRUFBRSxFQUFFO0lBQy9GLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1FBQ2hDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNyQztJQUNELDhCQUE4QjtJQUM5QixNQUFNLEtBQUssR0FBRztRQUNWLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUU7S0FDNUUsQ0FBQztJQUNGLHdCQUF3QjtJQUN4QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pHLDRCQUE0QjtJQUM1QixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUU7SUFDMUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsVUFBVTtJQUNWLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQSJ9