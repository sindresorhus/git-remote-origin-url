# git-remote-origin-url

> Get the remote origin URL of a Git repository

## Install

```
$ npm install git-remote-origin-url
```

## Usage

```js
import gitRemoteOriginUrl from 'git-remote-origin-url';

console.log(await gitRemoteOriginUrl());
//=> 'git@github.com:sindresorhus/git-remote-origin-url.git'
```

## gitRemoteOriginUrl(options?)

### options

Type: `object`

#### cwd

Type: `string`\
Default: `process.cwd()`

The current working directory.

#### remoteName

Type: `string`\
Default: `'origin'`

The Git remote name.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-git-remote-origin-url?utm_source=npm-git-remote-origin-url&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
