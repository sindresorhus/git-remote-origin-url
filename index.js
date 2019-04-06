'use strict';
const {promisify} = require('util');
const gitconfig = require('gitconfiglocal');

module.exports = async dir => {
	const config = await promisify(gitconfig)(dir || process.cwd());
	const url = config.remote && config.remote.origin && config.remote.origin.url;

	if (!url) {
		throw new Error('Couldn\'t find origin url');
	}

	return url;
};
