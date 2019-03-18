"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 社团活动相关控制器
 */
const message_1 = require("../utils/message");
const alioss_1 = require("../utils/upload/alioss");
const base_1 = require("./common/base");
class UploadController extends base_1.default {
    /**
     * 上传社友用户头像
     */
    async common_sign(dir) {
        const { ctx } = this;
        try {
            const { filepath } = ctx.query;
            if (!filepath)
                return ctx.body = new message_1.default(message_1.ErrorType.UPLOAD_NO_FILE);
            // const dir = '/union/headpic/';
            const formData = await alioss_1.getSignature(filepath, dir);
            ctx.body = { formData };
        }
        catch (error) {
            ctx.body = new message_1.default(message_1.ErrorType.UPLOAD_FAIL, { error });
        }
    }
    /**
     * 上传 供应商端头像至 kuaisong/supplier/headpic/
     * get("/upload/supplierHeadpic")
     */
    async supplierHeadpic() {
        const dir = 'kuaisong/supplier/headpic/';
        this.common_sign(dir);
    }
}
exports.default = UploadController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCw4Q0FBc0Q7QUFDdEQsbURBQXNEO0FBQ3RELHdDQUEyQztBQUUzQyxNQUFxQixnQkFBaUIsU0FBUSxjQUFjO0lBQ3hEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSTtZQUNBLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRO2dCQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxpQ0FBaUM7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxxQkFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDM0I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBTyxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsZUFBZTtRQUN4QixNQUFNLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQzVCLENBQUM7Q0FFSjtBQTFCRCxtQ0EwQkMifQ==