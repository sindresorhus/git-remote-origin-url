# git-remote-origin-url [![Build Status](https://secure.travis-ci.org/sindresorhus/git-remote-origin-url.png?branch=master)](http://travis-ci.org/sindresorhus/git-remote-origin-url)

Get the remote origin url of a git repository.


## Getting started

Install: `npm install --save git-remote-origin-url`


#### Example

```js
var originUrl = require('git-remote-origin-url');

originUrl('path/to/repository', function (err, url) {
	console.log(url);
	// git@github.com:sindresorhus/git-remote-origin-url.git
});
```


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)
