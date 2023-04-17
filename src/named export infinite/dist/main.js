(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/named export infinite/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "infinite": function () { return infinite; },
          "staticA": function () { return staticA; }
        });
        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export infinite/moduleC.js");
        const staticA = 'a';
        const infinite = () => (0, _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'b';
      }),
    "./src/named export infinite/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export infinite/moduleA.js");
        const bar = () => _moduleA__WEBPACK_IMPORTED_MODULE_0__.infinite() + 'bar';
        __webpack_exports__["default"] = (bar);
      }),
    "./src/named export infinite/moduleC.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export infinite/moduleB.js");
        const getB = () => (0, _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"])();
        __webpack_exports__["default"] = (getB);
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
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export infinite/moduleA.js");
    console.log({ staticA: _moduleA__WEBPACK_IMPORTED_MODULE_0__.staticA });
    console.log((0, _moduleA__WEBPACK_IMPORTED_MODULE_0__.infinite)());
  }();
})()
  ;