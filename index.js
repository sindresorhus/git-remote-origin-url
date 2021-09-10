import {promisify} from 'node:util';
import process from 'node:process';
import gitconfig from 'gitconfiglocal';

const pGitconfig = promisify(gitconfig);

export default async function gitRemoteOriginUrl({cwd = process.cwd(), remoteName = 'origin'} = {}) {
	const config = await pGitconfig(cwd);
	const url = config.remote && config.remote[remoteName] && config.remote[remoteName].url;

	if (!url) {
		throw new Error(`Couldn't find ${remoteName} url`);
	}

	return url;
}
