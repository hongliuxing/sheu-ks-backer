/**
 * 社团活动相关控制器
 */
import Message, { ErrorType } from '../utils/message';
import { getSignature } from '../utils/upload/alioss';
import BaseController from './common/base';

export default class UploadController extends BaseController {
    /**
     * 上传社友用户头像
     */
    public async common_sign(dir){
        const { ctx } = this;
        try {
            const { filepath } = ctx.query;
            if (!filepath) return ctx.body = new Message(ErrorType.UPLOAD_NO_FILE);
            // const dir = '/union/headpic/';
            const formData = await getSignature(filepath, dir);
            ctx.body = { formData };
        } catch (error) {
            ctx.body = new Message(ErrorType.UPLOAD_FAIL, { error });
        }
    }

    /**
     * 上传 供应商端头像至 kuaisong/supplier/headpic/
     * get("/upload/supplierHeadpic")
     */
    public async supplierHeadpic() {
        const dir = 'kuaisong/supplier/headpic/';
        this.common_sign( dir );
    }

}