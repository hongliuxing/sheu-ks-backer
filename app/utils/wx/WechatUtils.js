// 预定义的一些工具函数
const md5 = require('blueimp-md5');
const xml2js = require('xml2js');
const axios = require('axios');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

const PAY_API_KEY = 'AhproditeIsGood20160104HYNIsGood';

var XMLBuilder = new xml2js.Builder({
    rootName: 'xml',
    headless: true,
    renderOpts: {
        pretty: false,
    },
});

module.exports = {
    /**
     * 获取随机字符串
     */
    getNonceStr() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (var i = 0; i < 16; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    },

    /**
     * 获取订单查询参数
     * bill_date: 下载对账单的日期，格式：20140603
     * bill_type: 
     *      ALL（默认值），返回当日所有订单信息（不含充值退款订单）
     *      SUCCESS，返回当日成功支付的订单（不含充值退款订单）
     *      REFUND，返回当日退款订单（不含充值退款订单）
     *      RECHARGE_REFUND，返回当日充值退款订单
     * 
     */
    getDownloadBillData({
        appid,
        mch_id,
        bill_date,
        bill_type,
    }) {
        const nonce_str = this.getNonceStr();
        const stringA = [`appid=${appid}`, `bill_date=${bill_date}` ,`bill_type=${bill_type}` ,
            `mch_id=${mch_id}`, `out_trade_no=${out_trade_no}`, `nonce_str=${nonce_str}`
        ].sort().join('&');
        const stringSignTemp = stringA + '&key=' + PAY_API_KEY;
        const sign = md5(stringSignTemp).toUpperCase();
        const param = {
            appid,
            bill_date,
            bill_type,
            mch_id,
            out_trade_no,
            nonce_str,
            sign
        };
        return XMLBuilder.buildObject(param);
    },
    /**
     * 查询订单状态
     * @param {*} out_trade_no 
     */
    async queryOrderquery(out_trade_no) {
        /**
         * 该接口提供所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。
         需要调用查询接口的情况：
        ◆ 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
        ◆ 调用支付接口后，返回系统错误或未知交易状态情况；
        ◆ 调用刷卡支付API，返回USERPAYING的状态；
        ◆ 调用关单或撤销接口API之前，需确认支付状态；
        */
        const mch_query_url = 'https://api.mch.weixin.qq.com/pay/orderquery';
        const param1 = {
            appid: 'wxcf0228511283435a',
            mch_id: '1516495431',
            out_trade_no,
            // out_trade_no: '1cca96340b2c46a999a16536a1db8163', // 存在的订单
            // out_trade_no: '4dd2c802132b4f9eb538adf96cb59946', // 订单不存在
        };
        const queryData = this.getOrderqueryData(param1);
        const queryResBuffer = await axios.post(mch_query_url, queryData);
        const queryRes = decoder.write(queryResBuffer.data);
        const xmlParser = new xml2js.Parser({explicitArray: false});
        return new Promise((resolve, reject) => {
            xmlParser.parseString(queryRes, (err, success) => {
                if(err) reject(err);
                resolve(success.xml);
            });
        });
    },

    /**
     * 获取订单查询参数
     */
    getOrderqueryData({
        appid,
        mch_id,
        out_trade_no
    }) {
        const nonce_str = this.getNonceStr();
        const stringA = [`appid=${appid}`, `mch_id=${mch_id}`, `out_trade_no=${out_trade_no}`,
            `nonce_str=${nonce_str}`
        ].sort().join('&');
        const stringSignTemp = stringA + '&key=' + PAY_API_KEY;
        const sign = md5(stringSignTemp).toUpperCase();
        const param = {
            appid,
            mch_id,
            out_trade_no,
            nonce_str,
            sign
        };
        return XMLBuilder.buildObject(param);
    },
    /**
     * 查询订单状态
     * @param {*} out_trade_no 
     */
    async queryOrderquery(out_trade_no) {
        /**
         * 该接口提供所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。
         需要调用查询接口的情况：
        ◆ 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
        ◆ 调用支付接口后，返回系统错误或未知交易状态情况；
        ◆ 调用刷卡支付API，返回USERPAYING的状态；
        ◆ 调用关单或撤销接口API之前，需确认支付状态；
        */
        const mch_query_url = 'https://api.mch.weixin.qq.com/pay/orderquery';
        const param1 = {
            appid: 'wxcf0228511283435a',
            mch_id: '1516495431',
            out_trade_no,
            // out_trade_no: '1cca96340b2c46a999a16536a1db8163', // 存在的订单
            // out_trade_no: '4dd2c802132b4f9eb538adf96cb59946', // 订单不存在
        };
        const queryData = this.getOrderqueryData(param1);
        const queryResBuffer = await axios.post(mch_query_url, queryData);
        const queryRes = decoder.write(queryResBuffer.data);
        const xmlParser = new xml2js.Parser({explicitArray: false});
        return new Promise((resolve, reject) => {
            xmlParser.parseString(queryRes, (err, success) => {
                if(err) reject(err);
                resolve(success.xml);
            });
        });
    },
    /**
     * 获取关闭订单参数
     */
    getOrdercloseData({
        appid,
        mch_id,
        out_trade_no
    }) {
        const nonce_str = this.getNonceStr();
        const stringA = [`appid=${appid}`, `mch_id=${mch_id}`, `out_trade_no=${out_trade_no}`,
            `nonce_str=${nonce_str}`
        ].sort().join('&');
        const stringSignTemp = stringA + '&key=' + PAY_API_KEY;
        const sign = md5(stringSignTemp).toUpperCase();
        const param = {
            appid,
            mch_id,
            out_trade_no,
            nonce_str,
            sign
        };
        return XMLBuilder.buildObject(param);
    },
    /**
     * 关闭订单状态
     * @param {*} out_trade_no 
     */
    async orderClose(out_trade_no) {
        /**
         * 以下情况需要调用关单接口：商户订单支付失败需要生成新单号重新发起支付，
         * 要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。
         * 注意：订单生成后不能马上调用关单接口，最短调用时间间隔为5分钟。
        */
        const mch_query_url = 'https://api.mch.weixin.qq.com/pay/closeorder';
        const param1 = {
            appid: 'wxcf0228511283435a',
            mch_id: '1516495431',
            out_trade_no,
            // out_trade_no: '1cca96340b2c46a999a16536a1db8163', // 存在的订单
            // out_trade_no: '4dd2c802132b4f9eb538adf96cb59946', // 订单不存在
        };
        const queryData = this.getOrderqueryData(param1);
        const queryResBuffer = await axios.post(mch_query_url, queryData);
        const queryRes = decoder.write(queryResBuffer.data);
        const xmlParser = new xml2js.Parser({explicitArray: false});
        return new Promise((resolve, reject) => {
            xmlParser.parseString(queryRes, (err, success) => {
                if(err) reject(err);
                resolve(success.xml);
            });
        });
    },
    /**
     * 获取支付签名
     * @param {*} appId 
     * @param {*} timeStamp 
     * @param {*} nonceStr 
     * @param {*} package 
     */
    getPaySign(appId, timeStamp, nonceStr, package) {
        var stringA = 'appId=' + appId +
            '&nonceStr=' + nonceStr +
            '&package=' + package +
            '&signType=MD5' +
            '&timeStamp=' + timeStamp

        var stringSignTemp = stringA + '&key=' + PAY_API_KEY
        var sign = md5(stringSignTemp).toUpperCase()
        return sign
    },
    /**
     * 获取交易ID
     * @param {*} attach 
     */
    getTradeId(attach) {
        var date = new Date().getTime().toString()
        var text = ""
        var possible = "0123456789"
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        var tradeId = 'ty_' + attach + '_' + date + text
        return tradeId
    },
    /**
     * 预支付签名
     * @param {*} appId 
     * @param {*} attach 
     * @param {*} productIntro 
     * @param {*} mchId 
     * @param {*} nonceStr 
     * @param {*} notifyUrl 
     * @param {*} openId 
     * @param {*} tradeId 
     * @param {*} ip 
     * @param {*} price 
     */
    getPrePaySign(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price) {
        var stringA = 'appid=' + appId +
            '&attach=' + attach +
            '&body=' + productIntro +
            '&mch_id=' + mchId +
            '&nonce_str=' + nonceStr +
            '&notify_url=' + notifyUrl +
            '&openid=' + openId +
            '&out_trade_no=' + tradeId +
            '&spbill_create_ip=' + ip +
            '&total_fee=' + price +
            '&trade_type=JSAPI'
        var stringSignTemp = stringA + '&key=' + PAY_API_KEY
        var sign = md5(stringSignTemp).toUpperCase()
        return sign
    },

    wxSendData(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price, sign) {
        const sendData = '<xml>' +
            '<appid>' + appId + '</appid>' +
            '<attach>' + attach + '</attach>' +
            '<body>' + productIntro + '</body>' +
            '<mch_id>' + mchId + '</mch_id>' +
            '<nonce_str>' + nonceStr + '</nonce_str>' +
            '<notify_url>' + notifyUrl + '</notify_url>' +
            '<openid>' + openId + '</openid>' +
            '<out_trade_no>' + tradeId + '</out_trade_no>' +
            '<spbill_create_ip>' + ip + '</spbill_create_ip>' +
            '<total_fee>' + price + '</total_fee>' +
            '<trade_type>JSAPI</trade_type>' +
            '<sign>' + sign + '</sign>' +
            '</xml>'
        return sendData
    },

    getPayParams(prepayId, tradeId) {
        const nonceStr = getNonceStr()
        const timeStamp = new Date().getTime().toString()
        const package = 'prepay_id=' + prepayId
        const paySign = getPaySign(appId, timeStamp, nonceStr, package)
        // 前端需要的所有数据, 都从这里返回过去
        const payParamsObj = {
            nonceStr: nonceStr,
            timeStamp: timeStamp,
            package: package,
            paySign: paySign,
            signType: 'MD5',
            tradeId: tradeId,
        }
        return payParamsObj
    },

};