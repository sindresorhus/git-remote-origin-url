'use strict';
const {promisify} = require('util');
const gitconfig = require('gitconfiglocal');

const pGitconfig = promisify(gitconfig);

module.exports = async (cwd = process.cwd(), remoteName = 'origin') => {
	const config = await pGitconfig(cwd);
	const url = config.remote && config.remote[remoteName] && config.remote[remoteName].url;

	if (!url) {
		throw new Error(`Couldn't find ${remoteName} url`);
	}

	return url;
};
