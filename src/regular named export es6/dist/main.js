(() => {
  "use strict";
  var __webpack_modules__ = ({
    "./src/regular named export es6/moduleA.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "namedA": () => (namedA),
          "namedWithImportedValue": () => (namedWithImportedValue)
        });

        var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export es6/moduleC.js");
        const namedA = 'a';
        const namedWithImportedValue = _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"] + 'b';
      }),

    "./src/regular named export es6/moduleB.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "default": () => (__WEBPACK_DEFAULT_EXPORT__)
        });
        var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export es6/moduleA.js");
        const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedWithImportedValue + 'bar';
        const __WEBPACK_DEFAULT_EXPORT__ = (bar);
      }),

    "./src/regular named export es6/moduleC.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "default": () => (__WEBPACK_DEFAULT_EXPORT__)
        });
        var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export es6/moduleB.js");
        const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"] + 'baz';
        const __WEBPACK_DEFAULT_EXPORT__ = (baz);
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

  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();

  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  var __webpack_exports__ = {};
  
  (() => {
    __webpack_require__.r(__webpack_exports__);
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export es6/moduleA.js");
    console.log(({ namedA: _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedA, namedWithImportedValue: _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedWithImportedValue }));
  })();
})()
  ;