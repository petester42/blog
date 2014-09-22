/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (request, response) {

  		return response.render('portfolio', null);
	}
};

