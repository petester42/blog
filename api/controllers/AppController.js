/**
 * AppController
 *
 * @description :: Server-side logic for managing Apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (req, res) {

		var marked = require('marked');
		
  		return res.render('app', {'markdown': marked('I am using __markdown__.')});
	}
};

