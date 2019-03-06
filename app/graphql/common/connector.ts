/**
 * 
 */
import { Context } from 'egg';
const _ = require('lodash');

interface Page {
    index: number;
    limit: number;
}

class BaseConnector {
    ctx: Context;

    constructor(ctx) {
        this.ctx = ctx;
    }

    generateQueryOptions({page, order}: {page: Page, order?: any}) {
        if (!page || !_.isObject(page)) {
            page = {index: 1, limit: 20};
        }
        console.log('generateQueryOptions 2:::::: ', page, order);
        const options = {
            limit: page.limit = !_.isNumber(page.limit) ? 20 :
                (page.limit <= 1000 && page.limit > 0 ? page.limit : 20), // 确保查询条目在安全范围
            offset: page.index > 1 ? (
                (page.index - 1) * page.limit
            ) : 0,
        };

        if (Array.isArray(order)) {
            const models = this.ctx.model;
            options[`order`] = order.map( (o) => o.model ? [models[o.model], o.key, o.sort] : [o.key, o.sort]);
        }

        return {
            ...options,
        };
    }
}

module.exports = BaseConnector;