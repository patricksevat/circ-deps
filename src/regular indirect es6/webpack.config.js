const path = require('path')

module.exports = {
  entry: [
    './src/regular indirect es6/entry'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: ['web', 'es6'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named'
  }
}