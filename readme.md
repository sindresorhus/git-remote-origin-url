# git-remote-origin-url [![Build Status](https://travis-ci.org/sindresorhus/git-remote-origin-url.svg?branch=master)](https://travis-ci.org/sindresorhus/git-remote-origin-url)

> Get the remote origin url of a Git repository


## Install

```
$ npm install git-remote-origin-url
```


## Usage

```js
const gitRemoteOriginUrl = require('git-remote-origin-url');

(async() => {
	console.log(await gitRemoteOriginUrl());
	//=> 'git@github.com:sindresorhus/git-remote-origin-url.git'
})();
```


## gitRemoteOriginUrl([cwd])

### cwd

Type: `string`<br>
Default: `process.cwd()`

The current working directory.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
