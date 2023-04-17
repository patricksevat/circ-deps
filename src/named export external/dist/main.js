(function () {
  var __webpack_modules__ = ({
    "./src/named export external/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "outsideCircDepChain": function () { return outsideCircDepChain; },
          "staticA": function () { return staticA; }
        });
        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export external/moduleC.js");
        var _outsideCircDepChain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/named export external/outsideCircDepChain.js");
        var _outsideCircDepChain__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_outsideCircDepChain__WEBPACK_IMPORTED_MODULE_1__);
        const staticA = 'a';
        const namedWithImportedValue = () => (0, _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'b';
        const outsideCircDepChain = () => _outsideCircDepChain__WEBPACK_IMPORTED_MODULE_1__.outside + 'a suffix'
      }),
    "./src/named export external/moduleB.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export external/moduleA.js");
        const bar = () => _moduleA__WEBPACK_IMPORTED_MODULE_0__.staticA + 'bar';
        __webpack_exports__["default"] = (bar);
      }),
    "./src/named export external/moduleC.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export external/moduleB.js");
        const baz = () => (0, _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'baz';
        __webpack_exports__["default"] = (baz);
      }),
    "./src/named export external/outsideCircDepChain.js":
      (function (module) {
        const outside = 'outside';
        module.exports = {
          outside
        }
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
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ?
        function () { return module['default']; } :
        function () { return module; };
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  }();
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
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/named export external/moduleA.js");
    console.log(({ staticA: _moduleA__WEBPACK_IMPORTED_MODULE_0__.staticA, namedWithImportedValue: (0, _moduleA__WEBPACK_IMPORTED_MODULE_0__.outsideCircDepChain)() }));
  }();
})()
  ;