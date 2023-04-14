/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class instance named export/moduleA.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instanceA": function() { return /* binding */ instanceA; }
/* harmony export */ });
/* harmony import */ var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance named export/moduleC.js");


class ClassA {
  property = 'foo'

  hello() {
    return 'world'
  }

  useC() {
    return 'use' + _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}

const instanceA = new ClassA();

 


/***/ }),

/***/ "./src/class instance named export/moduleB.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance named export/moduleA.js");


// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
 
const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__.instanceA.property + 'bar';

// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
// const bar = instanceA.hello() + 'bar';

// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
// const bar = instanceA.useC() + 'bar';

/* harmony default export */ __webpack_exports__["default"] = (bar);


/***/ }),

/***/ "./src/class instance named export/moduleC.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance named export/moduleB.js");


const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"]+'baz';
/* harmony default export */ __webpack_exports__["default"] = (baz);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/class instance named export/moduleA.js");


console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__.instanceA.property);
console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__.instanceA.hello());
console.log(_moduleA__WEBPACK_IMPORTED_MODULE_0__.instanceA.useC());
}();
/******/ })()
;