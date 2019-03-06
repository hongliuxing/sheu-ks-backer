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
    class StudentController extends BaseController {
        public async index() {
            const {ctx} = this;
            console.log( '【index】GQL StudentController ctx.query => ', ctx.query );

            // const query = JSON.stringify({
            //     query: `{ user(id: ${user.id}) { id name } }`,
            // });
            const data = await ctx.service.graphql.query(ctx.query);
            console.log('【index】GQL StudentController data => ', data);

            ctx.body = {
                data,
                msg: 'viste [StudentController] success!',
            };
        }

        public async show() {
            const {ctx} = this;
            console.log( '【show】GQL StudentController ctx.query => ', ctx.query );
            console.log( '【show】GQL StudentController ctx.params => ', ctx.params );

            // const query = JSON.stringify({
            //     query: `{ user(id: ${user.id}) { id name } }`,
            // });
            const data = await ctx.service.graphql.query(ctx.query);
            console.log('【show】GQL StudentController data => ', data);

            ctx.body = {
                data,
                msg: 'viste [StudentController] success!',
            };
        }
    }

    return StudentController;
}