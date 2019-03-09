"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_error_1 = require("./message-error");
/**
 * 关于返回数据的统一定义
 */
class MessageGQL {
    constructor({ err, desc, data }) {
        if (err instanceof message_error_1.ProjectError) {
            this.err = err.errCode;
            this.msg = err.msg;
        }
        // this.err = (err instanceof ProjectError) ? err.errCode : null;
        this.desc = desc;
        if (data !== undefined) {
            this[Array.isArray(data) ? 'list' : 'info'] = data;
        }
    }
}
exports.default = MessageGQL;
exports.ErrorType = message_error_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1ncWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLWdxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFzRDtBQUN0RDs7R0FFRztBQUNILE1BQU0sVUFBVTtJQU1aLFlBQVksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQztRQUN6QixJQUFJLEdBQUcsWUFBWSw0QkFBWSxFQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDdEI7UUFDRCxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFDO1lBQ25CLElBQUksQ0FBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxHQUFHLElBQUksQ0FBQztTQUN4RDtJQUNMLENBQUM7Q0FDSjtBQUVELGtCQUFlLFVBQVUsQ0FBQztBQUViLFFBQUEsU0FBUyxHQUFHLHVCQUFPLENBQUMifQ==