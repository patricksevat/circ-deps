const path = require('path')

module.exports = {
  entry: {
    entry: { import: './src/regular chunks entrypoint dependencies/entry', dependOn: ['moduleABC'] },
    moduleABC: { import: './src/regular chunks entrypoint dependencies/moduleA' }
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