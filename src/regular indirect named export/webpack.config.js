const path = require('path')

module.exports = {
  entry: [
    './src/regular indirect named export/entry'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: ['web', 'es5'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named'
  }
}