(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/named export static/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "namedWithImportedValue": function () { return namedWithImportedValue; },
          "staticA": function () { return staticA; }
        });
        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export static/moduleC.js");
        const staticA = 'a';
        const namedWithImportedValue = () => (0, _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'b';
      }),
    "./src/named export static/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export static/moduleA.js");
        const bar = () => _moduleA__WEBPACK_IMPORTED_MODULE_0__.staticA + 'bar';
        __webpack_exports__["default"] = (bar);
      }),
    "./src/named export static/moduleC.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export static/moduleB.js");
        const baz = () => (0, _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'baz';
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
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export static/moduleA.js");
    console.log(({ staticA: _moduleA__WEBPACK_IMPORTED_MODULE_0__.staticA, namedWithImportedValue: (0, _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedWithImportedValue)() }));
  }();
})()
  ;