const Path = require('path')

module.exports = {
  entry: {
    main: './index.js',
    auto: './auto.js'
  },
  output: {
    filename: '[name].js',
    path: Path.resolve(__dirname, 'dist')
  }
}
