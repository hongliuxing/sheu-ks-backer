"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 函数用于将一个值 origin 解析成字符串形式, 区别于 JSON.stringify 的方面：
 * 1. 如果 origin 是一个简单值（number、string、boolean、null、undefined），则直接返回该值的字符串形式;
 * 	  1.1 如果 origin 是一个 字符串值(string) , 则返回的字符串会被双引号包裹。如字符串 abc 将返回 "abc"；
 * 2. 如果 origin 是一个普通对象，则展开该对象的属性，返回【属性名:属性值】格式的字符串;
 * 	  2.1 函数属性将不会被解析;
 * 	  2.2 具有空值(null或undefined)的属性将被忽略;
 * 	  2.3 父级(原型链上层)对象的属性将不会被解析;
 * 	  2.4 如果属性值依然是一个对象(或数组), 则会被递归解析深层结构;
 * 	  2.5 参数【hasWrap】表示是否具有外层包裹符, 只有当 origin 是普通对象时有效, 默认值为 true：
 * 	  	2.5.1 hasWrap = true 时: 对象 {foo: 'foo', bar: {baz: 29}} 将被解析成字符串 {foo: "foo", bar: 29}
 *		2.5.2 hasWrap = false 时: 对象 {foo: 'foo', bar: {baz: 29}} 将被解析成字符串 foo: "foo", bar: 29
 * 		2.5.3 hasWrap 仅控制最外层对象是否包含大括号包裹;
 * 3. 如果 origin 是一个数组对象, 则展开该数组的各元素项组成的字符串格式;
 * 	  3.1 函数/空值(null或undefined)会被忽略;
 * 	  3.2 如果数组元素依然是一个普通对象或数组对象, 则会继续递归解析;
 */
function spreadToString(hasWrap) {
    'use strict'; // 严格模式可避免 this 做自动转型
    if (hasWrap === undefined) {
        // 如果参数 hasWrap 未传递参数, 默认赋值为 true
        hasWrap = true;
    }
    // 非严格模式下, 如果调用者是一个简单值, 则通过 this 关键字将得到该值装箱后的对象,
    // 如数值 29 会被转换为 new Number(29)
    const self = this;
    if (Array.isArray(self)) {
        // 如果当前值是数组,则以数组的方式进行解析
        return `[${self
            .filter((ele) => !(typeof ele === 'function' || ele == null)) // 过滤函数及空值
            .map((ele) => spreadToString.call(ele, true)) // 递归调用 spreadField 函数
            .join(',') // 将数组元素通过逗号分隔, 合并成新的字符串
        }]`;
    }
    else if (self != null && typeof self === 'object') {
        let prefix = '', suffix = ''; // 对象外围的前缀和后缀
        if (hasWrap) { // 如果 hasWrap=true 则对 对象 进行外围大括号包裹
            prefix = '{';
            suffix = '}';
        }
        // 如果当前的 self 是对象 (规避 null 通过 typeof 判断结果是"object"的问题)
        return `${prefix}${Object.keys(self)
            .filter((key) => !(typeof self[key] === 'function' || self[key] == null)) // 过滤函数及空值
            .map((key) => {
            // 属性不是对象自身的属性,则忽略
            if (!self.hasOwnProperty(key))
                return '';
            if (typeof self[key] === 'string') {
                // 字符串属性，值部分添加双引号包裹
                return `${key}: "${self[key]}"`;
            }
            if (typeof self[key] === 'object') {
                // 值依然是 object, 则递归遍历
                return `${key}: ${spreadToString.call(self[key], true)}`;
            }
            // 其他值直接返回键值映射
            return `${key}: ${self[key]}`;
        }).join(',')}${suffix}`;
    }
    else if (typeof self === 'string') {
        // self 是字符串, 则添加双引号包裹
        return `"${self}"`;
    }
    else {
        // self 是其他值, 则直接返回该值
        return String(self);
    }
}
// 代理展开函数
exports.spread = (thisObj) => spreadToString.call(thisObj, true);
// 代理展开函数, 最外层对象不进行包裹
exports.spreadNoWrap = (thisObj) => spreadToString.call(thisObj, false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3FsLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncWwtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsU0FBUyxjQUFjLENBQVksT0FBTztJQUN0QyxZQUFZLENBQUMsQ0FBQyxxQkFBcUI7SUFDbkMsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1FBQ3ZCLGlDQUFpQztRQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsZ0RBQWdEO0lBQ2hELDhCQUE4QjtJQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7SUFFbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLHVCQUF1QjtRQUN2QixPQUFPLElBQUksSUFBSTthQUNWLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO2FBQ3ZFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7YUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QjtRQUNuQyxHQUFHLENBQUM7S0FDWDtTQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDakQsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxhQUFhO1FBQzNDLElBQUksT0FBTyxFQUFFLEVBQUUsa0NBQWtDO1lBQzdDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDYixNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO1FBQ0Qsc0RBQXNEO1FBQ3RELE9BQU8sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7YUFDbkYsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDVCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMvQixtQkFBbUI7Z0JBQ25CLE9BQU8sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDbkM7WUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IscUJBQXFCO2dCQUNyQixPQUFPLEdBQUcsR0FBRyxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDNUQ7WUFDRCxjQUFjO1lBQ2QsT0FBTyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7S0FDL0I7U0FBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNqQyxzQkFBc0I7UUFDdEIsT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDO0tBQ3RCO1NBQU07UUFDSCxxQkFBcUI7UUFDckIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBQ0QsU0FBUztBQUNJLFFBQUEsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RSxxQkFBcUI7QUFDUixRQUFBLFlBQVksR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMifQ==