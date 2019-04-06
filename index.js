'use strict';
const {promisify} = require('util');
const gitconfig = require('gitconfiglocal');

const pGitconfig = promisify(gitconfig);

module.exports = async (cwd = process.cwd()) => {
	const config = await pGitconfig(cwd);
	const url = config.remote && config.remote.origin && config.remote.origin.url;

	if (!url) {
		throw new Error('Couldn\'t find origin url');
	}

	return url;
};
