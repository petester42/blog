/**
 * AboutControllerController
 *
 * @description :: Server-side logic for managing Aboutcontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (request, response) {

  		return response.render('about', null);
	}
};

