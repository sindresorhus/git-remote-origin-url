/**
Get the remote origin url of a Git repository.

@param cwd - The current working directory. Default: `process.cwd()`.
@param remoteName - The Git remote name. Default: `'origin'`.

@example
```
import gitRemoteOriginUrl = require('git-remote-origin-url');

(async() => {
	console.log(await gitRemoteOriginUrl());
	//=> 'git@github.com:sindresorhus/git-remote-origin-url.git'
})();
```
*/
declare function gitRemoteOriginUrl(cwd?: string, remoteName?: string): Promise<string>;

export = gitRemoteOriginUrl;
