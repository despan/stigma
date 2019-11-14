<img src="logo.png" align="right" height="60px"/>
<img align="right" width="0" height="48px" hspace="10"/>

# stigma :construction:

[![Published Version](https://img.shields.io/npm/v/stigma)](https://www.npmjs.com/package/stigma)
[![Commit Style](https://img.shields.io/badge/commits-conventional-blue.svg)](https://conventionalcommits.org)
[![Code Style](https://img.shields.io/badge/code%20style-standard-blue.svg)](http://standardjs.com)
[![GitHub](https://img.shields.io/github/license/despan/choker)](/LICENSE)

> Mark client browser using various storage options

### Installation

```sh
npm install stigma
```

To directly include in browser use _"./dist/main.js"_

### Usage

```js
import Stigma from 'stigma'

const { put, get } = Stigma('KEY')

async function test () {
  await put('xxx')
  await get() // > "xxx"
}
```

### API

> TODO

### Development

Acquire source code

```sh
# clone repo
git clone https://github.com/despan/stigma

#
cd stigma

# install dependencies
npm install
```

Check [Contributing Guide](/CONTRIBUTING.md) for instructions.

### Test

```sh
# run quick tests
npm run test

# test watching file changes
npm run test:watch
```

## Acknowledgement

- Logo created by beth bolton from the Noun Project

## License

The MIT License
