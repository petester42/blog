/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index : function (request, response) {
		//todo change to posts
		var postConfig = sails.config.posts;

		generatePosts(postConfig.postDirectory, function (posts) {
			return response.render('blog', {"posts" : posts});
		});
	}
};

function generatePosts(path, callback) {

//limit number of posts
	var fs = require('fs');

	fs.readdir(path, function (error, files) {

		var posts = [];

		var processed = files.length;

		for (i = 0; i < files.length; i++) {
				
			var postConfig = sails.config.posts;

			var markdown = getMarkdown(postConfig.postDirectory + "/" + files[i], function(body) {

				if (body != null) {
					posts.push({"content" : body});
				}
				
				--processed;

				if (processed == 0) {
					
					callback(posts.sort());
				}
			});
		};
	});
}

function getMarkdown(path, callback) {

	var request = require("request");
	var marked = require('marked');
	marked.setOptions({
	  renderer: new marked.Renderer(),
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  smartLists: true,
	  smartypants: false
	});

	var fs = require('fs');
	fs.readFile(path, function (error, data) {

		if (error) {
	  		callback(null);
	  	}

	  	else {
	  		callback(marked(data.toString()));
	  	}
	});
}

