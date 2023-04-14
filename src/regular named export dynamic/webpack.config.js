const path = require('path')

module.exports = {
  entry: [
    './src/regular named export dynamic/entry'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: ['web', 'es5'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named', // for better code readability
  }
}