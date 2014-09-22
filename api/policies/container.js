/**
 * containter
 *
 * @module      :: Container
 * @description :: Policy to add header and footer to all views
 *
 */
module.exports = function(req, res, next) {

	var title = {'name': 'Pierre-Marc Airoldi', 'link': '/'};
	var navbar = [{'name':'Blog', 'link':'/'}, {'name':'About', 'link':'/about'}, {'name':'Portfolio', 'link':'/portfolio'}, {'name':'Contact', 'link':'/contact'}];
		
  	res.locals = {'title': title, 'navbar': navbar};

  	return next();
};
