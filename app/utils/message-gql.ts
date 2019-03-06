import ErrType, {ProjectError} from './message-error';
/**
 * 关于返回数据的统一定义
 */
class MessageGQL{

    public err: ProjectError | any;
    public msg: string;
    public desc: string;

    constructor({err, desc, data}) {
        if (err instanceof ProjectError){
            this.err = err.errCode;
            this.msg = err.msg;
        }
        // this.err = (err instanceof ProjectError) ? err.errCode : null;
        this.desc = desc;
        if (data !== undefined){
            this[ Array.isArray(data) ? 'list' : 'info' ] = data;
        }
    }
}

export default MessageGQL;

export const ErrorType = ErrType;