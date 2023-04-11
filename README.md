# About this repo

This repo showcases a couple different ways how circular dependencies are being handled by Webpack

## Got to know before continuing!

The main thing you need to know about Webpack in the context of circular dependencies is how it handles module dependencies.

There are a couple elements in play:

#### The `__webpack_modules__` variable

This variable is an array or object which contains the source code for a particular file.

For example, source file

```
import b from './b'

const baz = b+'baz';
export default baz;
```

is added to `__webpack_modules__`, like this:

```
var __webpack_modules__ = ({
  "./src/regular with copied circ dep/c.js": (
    function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular with copied circ dep/b.js");

      const baz = _b__WEBPACK_IMPORTED_MODULE_0__["default"]+'baz';
      __webpack_exports__["default"] = (baz);
    }
  )
});
```
#### The `__webpack_module_cache__` and `__webpack_require__` variables

As you can see in the example above, `import b from './b'` is transformed to `__webpack_require__("./src/regular with copied circ dep/b.js")`.

So what is `__webpack_require__()`?

Whenever `__webpack_require__` is called, it takes the `moduleId` (`"./src/regular with copied circ dep/b.js"` in this case) and checks if there is already
an entry for this `moduleId` in `__webpack_module_cache__`

// TODO: finish

