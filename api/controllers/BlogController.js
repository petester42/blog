/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index : function (request, response) {

		var http = require('http');

//get posts from the web
		var links = ["https://raw.githubusercontent.com/NSHipster/articles/master/2012-07-07-nsindexset.md", "https://raw.githubusercontent.com/NSHipster/articles/master/2012-07-14-nscache.md", "https://raw.githubusercontent.com/NSHipster/articles/master/2012-07-24-nssortdescriptor.md"];
		
		generatePosts(links, function (posts) {
			return response.render('blog', {"posts" : posts});
		});
	}
};

function generatePosts(links, callback) {

//limit number of posts
	var posts = [];
	var processed = links.length;

	for (i = 0; i < links.length; i++) {
			
		var markdown = getMarkdown(links[i], function(body) {

			if (body != null) {
				posts.push({"content" : body});
			}
			
			--processed;

			if (processed == 0) {
				
				callback(posts.sort());
			}
		});
	};
}

function getMarkdown(link, callback) {

	var request = require("request");
	var marked = require('marked');
	marked.setOptions({
	  renderer: new marked.Renderer(),
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: true,
	  smartLists: true,
	  smartypants: false
	});

	request(link, function(error, response, body) {

	  	if (error) {
	  		callback(null);
	  	}

	  	else {
	  		callback(marked(body));
	  	}

	});
}

