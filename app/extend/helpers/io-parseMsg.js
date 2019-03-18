"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用来将 socket.io 拿到的入参整理
 */
exports.parseIOMsg = (action, payload = {}, metadata = {}) => {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW8tcGFyc2VNc2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpby1wYXJzZU1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDeEIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNiLE9BQU87UUFDSCxJQUFJO1FBQ0osSUFBSSxFQUFFO1lBQ0YsTUFBTTtZQUNOLE9BQU87U0FDVjtLQUNKLENBQUM7QUFDTixDQUFDLENBQUMifQ==