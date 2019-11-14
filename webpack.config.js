const Path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, 'dist')
  }
}
