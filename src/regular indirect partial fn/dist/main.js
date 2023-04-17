(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/regular indirect copy/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular indirect copy/moduleC.js");
        const foo = () => _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"] + 'a';
        __webpack_exports__["default"] = (foo);
      }),
    "./src/regular indirect copy/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular indirect copy/moduleA.js");
        const bar = (0, _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'bar';
        __webpack_exports__["default"] = (bar);
      }),
    "./src/regular indirect copy/moduleC.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular indirect copy/moduleB.js");
        const c = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'c';
        __webpack_exports__["default"] = (c);
      })
  });
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  !function () {
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();
  var __webpack_exports__ = {};
  !function () {
    __webpack_require__.r(__webpack_exports__);
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular indirect copy/moduleA.js");
    console.log((0, _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }();
})()
  ;