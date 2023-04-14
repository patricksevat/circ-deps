const path = require('path')

module.exports = {
  entry: [
    './src/class instance indirect named/entry'
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