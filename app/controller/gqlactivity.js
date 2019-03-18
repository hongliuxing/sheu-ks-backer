"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET	/posts	posts	app.controllers.posts.index
 * GET	/posts/new	new_post	app.controllers.posts.new
 * GET	/posts/:id	post	app.controllers.posts.show
 * GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
 * POST	/posts	posts	app.controllers.posts.create
 * PUT	/posts/:id	post	app.controllers.posts.update
 * DELETE	/posts/:id	post	app.controllers.posts.destroy
 */
const base_1 = require("./common/base");
exports.default = () => {
    class GqlactivityController extends base_1.default {
        async index() {
            const { ctx } = this;
            const { query = '' } = ctx.query;
            console.log('ctx.query => ', query);
            // const query = JSON.stringify({
            //     query: `{ user(id: ${user.id}) { id name } }`,
            // });
            const data = await ctx.service.graphql.query(query);
            console.log('GQL ctx.service.graphql => ', ctx.service.graphql);
            console.log('GQL data => ', data);
            ctx.body = {
                data,
                msg: 'viste [GqlactivityController] success!',
            };
        }
    }
    return GqlactivityController;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3FsYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncWxhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztHQVFHO0FBQ0gsd0NBQTJDO0FBRTNDLGtCQUFlLEdBQUcsRUFBRTtJQUNoQixNQUFNLHFCQUFzQixTQUFRLGNBQWM7UUFDdkMsS0FBSyxDQUFDLEtBQUs7WUFDZCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO1lBRW5CLE1BQU0sRUFBQyxLQUFLLEdBQUUsRUFBRSxFQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFFLGVBQWUsRUFBRSxLQUFLLENBQUUsQ0FBQztZQUV0QyxpQ0FBaUM7WUFDakMscURBQXFEO1lBQ3JELE1BQU07WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDUCxJQUFJO2dCQUNKLEdBQUcsRUFBRSx3Q0FBd0M7YUFDaEQsQ0FBQztRQUNOLENBQUM7S0FDSjtJQUVELE9BQU8scUJBQXFCLENBQUM7QUFDakMsQ0FBQyxDQUFDIn0=