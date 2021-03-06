/**
 * GET	/posts	posts	app.controllers.posts.index
 * GET	/posts/new	new_post	app.controllers.posts.new
 * GET	/posts/:id	post	app.controllers.posts.show
 * GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
 * POST	/posts	posts	app.controllers.posts.create
 * PUT	/posts/:id	post	app.controllers.posts.update
 * DELETE	/posts/:id	post	app.controllers.posts.destroy
 */
import BaseController from './common/base';

export default () => {
    class GqlactivityController extends BaseController {
        public async index() {
            const {ctx} = this;

            const {query= ''} = ctx.query;
            console.log( 'ctx.query => ', query );

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