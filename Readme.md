
# cookies-enabled

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check whether or not cookies are enabled

## Installation

    $ npm install @micro-js/cookies-enabled

## Usage

```js
var cookiesEnabled = require('@micro-js/cookies-enabled')

if (!cookiesEnabled()) {
  alert('Please enable cookies before using this website!')
}

```

## API

### cookiesEnabled()

**Returns:** Boolean indicating whether or not cookies are currently enabled in the user's browser.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/cookies-enabled.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/cookies-enabled
[git-image]: https://img.shields.io/github/tag/micro-js/cookies-enabled.svg
[git-url]: https://github.com/micro-js/cookies-enabled
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/cookies-enabled.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/cookies-enabled
