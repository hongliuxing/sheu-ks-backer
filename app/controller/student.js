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
    class StudentController extends base_1.default {
        async index() {
            const { ctx } = this;
            console.log('【index】GQL StudentController ctx.query => ', ctx.query);
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
        async show() {
            const { ctx } = this;
            console.log('【show】GQL StudentController ctx.query => ', ctx.query);
            console.log('【show】GQL StudentController ctx.params => ', ctx.params);
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7R0FRRztBQUNILHdDQUEyQztBQUUzQyxrQkFBZSxHQUFHLEVBQUU7SUFDaEIsTUFBTSxpQkFBa0IsU0FBUSxjQUFjO1FBQ25DLEtBQUssQ0FBQyxLQUFLO1lBQ2QsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFFLDRDQUE0QyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUV2RSxpQ0FBaUM7WUFDakMscURBQXFEO1lBQ3JELE1BQU07WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUzRCxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNQLElBQUk7Z0JBQ0osR0FBRyxFQUFFLG9DQUFvQzthQUM1QyxDQUFDO1FBQ04sQ0FBQztRQUVNLEtBQUssQ0FBQyxJQUFJO1lBQ2IsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFFLDJDQUEyQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFFLDRDQUE0QyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUV4RSxpQ0FBaUM7WUFDakMscURBQXFEO1lBQ3JELE1BQU07WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUxRCxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNQLElBQUk7Z0JBQ0osR0FBRyxFQUFFLG9DQUFvQzthQUM1QyxDQUFDO1FBQ04sQ0FBQztLQUNKO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQztBQUM3QixDQUFDLENBQUMifQ==