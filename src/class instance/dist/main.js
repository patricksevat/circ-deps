(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/class instance/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance/moduleC.js");
        class ClassA {
          property = 'foo'
          hello() {
            return 'world'
          }
          useC() {
            return 'use' + _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"]
          }
        }
        __webpack_exports__["default"] = (new ClassA());
      }),
    "./src/class instance/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance/moduleA.js");
        const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"].useC() + 'bar';
        __webpack_exports__["default"] = (bar);
      }),
    "./src/class instance/moduleC.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance/moduleB.js");
        const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'baz';
        __webpack_exports__["default"] = (baz);
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
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance/moduleA.js");
    console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"].property);
    console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"].hello());
    console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"].useC());
  }();
})()
  ;