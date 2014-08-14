'use strict';
var assert = require('assert');
var originUrl = require('./');

it('returns the remote origin url', function (cb) {
	originUrl(__dirname, function (err, url) {
		assert(url);
		cb();
	});
});
