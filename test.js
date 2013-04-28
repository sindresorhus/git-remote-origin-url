/*global describe, it */
'use strict';
var assert = require('assert');
var originUrl = require('./url');


describe('originUrl()', function () {
	it('returns the remote origin url', function (cb) {
		originUrl(__dirname, function (err, url) {
			assert(url);
			cb();
		});
	});
});
