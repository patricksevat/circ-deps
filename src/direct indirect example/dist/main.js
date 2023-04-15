(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/direct indirect example/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/direct indirect example/moduleB.js");
        const useStaticValueFromB = `${_moduleB__WEBPACK_IMPORTED_MODULE_0__.bStatic} imported from ./moduleB`;
        __webpack_exports__["default"] = (useStaticValueFromB);
      }),
    "./src/direct indirect example/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "bStatic": function () { return bStatic; },
          "direct": function () { return direct; },
          "indirectFn": function () { return indirectFn; }
        });
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/direct indirect example/moduleA.js");
        const direct = `useImportedValue from moduleA: ${_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"]}`;
        const indirectFn = () => `useImportedValue from moduleA: ${_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"]}`;
        const bStatic = 'bStatic'
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
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();
  !function () {
    __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  }();
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
    var _moduleA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/direct indirect example/moduleA.js");
    var _moduleB_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/direct indirect example/moduleB.js");
    console.log({ direct: _moduleB_js__WEBPACK_IMPORTED_MODULE_1__.direct, indirectFn: (0, _moduleB_js__WEBPACK_IMPORTED_MODULE_1__.indirectFn)() })
  }();
})()
  ;