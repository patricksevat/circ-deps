const path = require('path')

module.exports = {
  entry: {
    chunkEntry: { import: './src/regular chunks dynamic/entry', dependOn: ['chunkABC'] },
    chunkABC: { import: './src/regular chunks dynamic/moduleA' }
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: ['web', 'es5'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named', // for better readability
    chunkIds: 'named', // for better code readability
    runtimeChunk: 'single'
  }
}