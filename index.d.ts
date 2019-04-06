/**
Get the remote origin url of a git repository.

@param cwd - Working directory. Default: `process.cwd()`.

@example
```
import gitRemoteOriginUrl = require('git-remote-origin-url');

(async() => {
	console.log(await gitRemoteOriginUrl());
	//=> 'git@github.com:sindresorhus/git-remote-origin-url.git'
})();
```
*/
declare function gitRemoteOriginUrl(cwd?: string): Promise<string>;

export = gitRemoteOriginUrl;
