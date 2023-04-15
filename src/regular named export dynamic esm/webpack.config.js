const path = require('path')

module.exports = {
  entry: [
    './src/regular named export dynamic esm/entry'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    module: true, // https://github.com/webpack/webpack/issues/2933#issuecomment-986020968
  },
  target: ['web', 'es6'],
  mode: 'none',
  // devtool: 'eval',
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named', // for better code readability
  },
  experiments: {
    outputModule: true, // https://github.com/webpack/webpack/issues/2933#issuecomment-986020968
  }
}