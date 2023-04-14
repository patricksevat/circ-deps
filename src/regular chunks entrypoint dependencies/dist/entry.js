"use strict";
(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["entry"], {
  "./src/regular chunks entrypoint dependencies/entry.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks entrypoint dependencies/moduleA.js");
      console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"]);
    })
},
function (__webpack_require__) {
  var __webpack_exec__ = function (moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
  __webpack_require__.O(0, ["moduleABC"], function () { return __webpack_exec__("./src/regular chunks entrypoint dependencies/entry.js"); });
  var __webpack_exports__ = __webpack_require__.O();
}
]);