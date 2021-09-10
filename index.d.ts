export type Options = {
	/**
	The current working directory.

	@default process.cwd()
	*/
	readonly cwd?: string;

	/**
	The Git remote name.

	@default 'origin'
	*/
	readonly remoteName?: string;
};

/**
Get the remote origin URL of a Git repository.

@example
```
import gitRemoteOriginUrl from 'git-remote-origin-url';

console.log(await gitRemoteOriginUrl());
//=> 'git@github.com:sindresorhus/git-remote-origin-url.git'
```
*/
export default function gitRemoteOriginUrl(options?: Options): Promise<string>;
