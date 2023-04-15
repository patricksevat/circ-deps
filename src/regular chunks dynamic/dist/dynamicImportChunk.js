"use strict";
(self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || []).push([["dynamicImportChunk"],{

/***/ "./src/regular chunks dynamic/moduleA.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleC.js");


const foo = _moduleC__WEBPACK_IMPORTED_MODULE_0__["default"]+'bar';
/* harmony default export */ __webpack_exports__["default"] = (foo);


/***/ }),

/***/ "./src/regular chunks dynamic/moduleB.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleA.js");


const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"] + 'bar';

/* harmony default export */ __webpack_exports__["default"] = (bar);


/***/ }),

/***/ "./src/regular chunks dynamic/moduleC.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular chunks dynamic/moduleB.js");


const baz = _moduleB__WEBPACK_IMPORTED_MODULE_0__["default"]+'baz';
/* harmony default export */ __webpack_exports__["default"] = (baz);


/***/ })

}]);