import { app } from 'egg-mock/bootstrap';

const mytoken = 'eyJkYXRhIjp7ImlkIjoiMzk1N2UxNjAtZWEzZi0xMWU4LTk1ODYtYzE1YjcxY2I3ZGQ1In0sImNyZWF0ZWQiOjI1ODEwNjc0LCJleHAiOjUxODQwMH0=.6Ek45TNBaUS3/2JgGHb8PI8Ax1aot8mWJH9E1t67VU8=';
// const otherToken = 'eyJkYXRhIjp7ImlkIjoiMjYxOTE0ZDAtZjE5MS0xMWU4LWFhMzAtNjdjNDBkYmE0MjMzIn0sImNyZWF0ZWQiOjI1Nzc5MTg0LCJleHAiOjUxODQwMH0=.1GPSHUpaU/QvHhtMZAf4nq/eIRMCL9b+7lvK88s4WKw=';

const headers = {
    'x-access-token': mytoken,
};

const toHttp = ({ method, query }) => new Promise((resolve, reject) => {
    const opts = {
        dataType: 'json',
    };
    // console.log('【HTTP Execute】 method ===> ', method);
    if (method === 'get') {
        app.httpRequest().get(`/graphql?${query}`, opts).set(headers).then(resolve).catch(reject);
    } else if (method === 'post') {
        app.httpRequest().post(`/graphql`, opts).send({query}).set(headers).then(resolve).catch(reject);
    } else {
        reject({msg: 'method is bad!'});
    }
});

export const toGet = (query) => toHttp({method: 'get', query});
export const toPost = (query) => toHttp({method: 'post', query});