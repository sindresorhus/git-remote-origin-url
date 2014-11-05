'use strict';
var test = require('ava');
var originUrl = require('./');

test('returns the remote origin url', function (t) {
	t.plan(2);

	originUrl(__dirname, function (err, url) {
		t.assert(!err, err);
		t.assert(url);
	});
});
