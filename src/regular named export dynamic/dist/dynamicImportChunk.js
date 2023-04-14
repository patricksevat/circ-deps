"use strict";
(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["dynamicImportChunk"], {
  "./src/regular named export dynamic/moduleB.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export dynamic/moduleA.js");
      const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedA + 'bar';
      __webpack_exports__["default"] = (bar);
    }),
  "./src/regular named export dynamic/moduleC.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export dynamic/moduleB.js");
      const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'baz';
      __webpack_exports__["default"] = (baz);
    })
}]);