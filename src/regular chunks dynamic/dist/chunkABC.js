"use strict";
(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["chunkABC"], {
  "./src/regular chunks dynamic/moduleA.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleC.js");
      const foo = _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"] + 'bar';
      __webpack_exports__["default"] = (foo);
    }),
  "./src/regular chunks dynamic/moduleB.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleA.js");
      const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"] + 'bar';
      __webpack_exports__["default"] = (bar);
    }),
  "./src/regular chunks dynamic/moduleC.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleB.js");
      const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'baz';
      __webpack_exports__["default"] = (baz);
    })
},
function (__webpack_require__) {
  var __webpack_exec__ = function (moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
  var __webpack_exports__ = (__webpack_exec__("./src/regular chunks dynamic/moduleA.js"));
}
]);