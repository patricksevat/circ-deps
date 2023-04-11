# Regular circ dep

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

### Webpack compiles into an IIFE

```
 (function() { // webpackBootstrap
 	"use strict";
 	var __webpack_modules__ = ({
    "./src/regular/a.js":
      (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          // Omitted for brevity
      }),
    "./src/regular/b.js":
      (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          // Omitted for brevity
      }),
    "./src/regular/c.js":
      (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          // Omitted for brevity
      })
 	});

 	// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		// Return the exports of the module
 		return module.exports;
 	}
 	
 	/* webpack/runtime/make namespace object */
 	!function() {
 		// define __esModule on exports
 		__webpack_require__.r = function(exports) {
    // Omitted for brevity
 	}();
 	
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function() {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular/a.js");

    console.log(_a__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }();
 })()
;
```

### entry point runs

The IIFE executes the entrypoint code first:

```
!function() {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular/a.js");

    console.log(_a__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }();
```

### entry point requires `moduleA.js`

In the entrypoint code we encounter `var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular/a.js");`

### webpack looks up `moduleA.js` in the module cache, it's not there

Relevant code:

```
// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		// Return the exports of the module
 		return module.exports;
 	}
```

The `__webpack_module_cache__` is empty since no modules have been succesfully resolved yet.

### !!!IMPORTANT!!! webpack require provisionally sets `module.exports = {}`

Before moving on 

    2. !!!IMPORTANT!!! webpack provisionally sets `module.exports = {}`
    3. webpack executes the module function from `__webpack_modules__`
    4. webpack sees that `moduleA.js` requires `moduleC.js`
  2. `moduleC.js` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `moduleC.js` requires `moduleB.js`
  5. `b` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `b` requires `moduleA.js`
  5. !!!IMPORTANT!!! `moduleA.js` is available in the module cache !!!with provisional `module.exports = {}`
  6. the result of `b` with "wrong" value of `moduleA.js` is stored in module cache
  7. the result of `moduleC.js` is stored in module cache
  8. the result of `moduleA.js` is being stored in module cache !!!but now with correct `module.exports.default`
