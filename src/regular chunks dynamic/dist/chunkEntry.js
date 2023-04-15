(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["chunkEntry"],{

/***/ "./src/regular chunks dynamic/entry.js":
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.e(/* import() | dynamicImportChunk */ "dynamicImportChunk").then(__webpack_require__.bind(__webpack_require__, "./src/regular chunks dynamic/moduleA.js")).then((module) => {
  console.log(module.default);
})

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/regular chunks dynamic/entry.js"));
/******/ }
]);