/**
 * 用来将 socket.io 拿到的入参整理
 */
export const parseIOMsg = (action, payload = {}, metadata = {}) => {
    const meta = Object.assign({}, {
        timestamp: Date.now(),
    }, metadata);
    return {
        meta,
        data: {
            action,
            payload,
        },
    };
}