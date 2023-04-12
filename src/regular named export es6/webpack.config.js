const path = require('path')

module.exports = {
  entry: [
    './src/regular named export es6/entry'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: ['web'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named'
  }
}