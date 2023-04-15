import('./moduleA.js' /* webpackChunkName: "dynamicImportChunk" */).then((module) => {
  console.log(module.default);
})