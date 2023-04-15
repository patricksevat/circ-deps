(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["dynamicImportChunk"], {
  "./src/regular named export dynamic esm/moduleB.js":
    ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      });
      var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export dynamic esm/moduleA.js");
      const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedA + 'bar';
      const __WEBPACK_DEFAULT_EXPORT__ = (bar);
    }),
  "./src/regular named export dynamic esm/moduleC.js":
    ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      });
      var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export dynamic esm/moduleB.js");
      const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'baz';
      const __WEBPACK_DEFAULT_EXPORT__ = (baz);
    })
}])