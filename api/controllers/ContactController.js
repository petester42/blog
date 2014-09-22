/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (request, response) {

  		return response.render('contact', null);
	}
};

