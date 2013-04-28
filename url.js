'use strict';
var gitconfig = require('gitconfiglocal');

module.exports = function (dir, cb) {
	gitconfig(dir, function (err, config) {
		if (err) {
			return cb(err);
		}

		var url = config.remote && config.remote.origin && config.remote.origin.url;

		if (!url) {
			return cb(new Error('Couldn\'t find origin url'));
		}

		cb(null, url);
	});
};
