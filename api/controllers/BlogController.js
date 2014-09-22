/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (request, response) {

		var posts = {"posts":[{"title":"one", "body":"test"}, {"title":"two", "body":"test"}, {"title":"three", "body":"test"}]};

  		return response.render('blog', posts);
	}
};

