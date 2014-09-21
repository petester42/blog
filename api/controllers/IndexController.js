/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (req, res) {

		var title = 'Pete App Designs';
		var navbar = [{'name':'About', 'link':'#about'}, {'name':'Products', 'link':'#apps'}, {'name':'Blog', 'link':'#blog'}, {'name':'Support', 'link':'#support'}, {'name':'Follow', 'link':'#follow'}];
		
  		return res.render('blog', {'title': title, 'navbar': navbar});
	}
};

