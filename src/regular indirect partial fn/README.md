# Regular default indirect circ dep

In this scenario each module `default` exports a function

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

When executing the `moduleB.js` function, the moduleCache looks like this:

```
__webpack_module_cache__ = {
	"./src/regular indirect/moduleA.js": {
		exports: {}
	},
	"./src/regular indirect/moduleB.js": {
		exports: {}
	},
	"./src/regular indirect/moduleC.js": {
		exports: {}
	},
}
```

When `moduleB.js` evaluates `const bar = (0,_moduleA__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'bar';`

it throws an error: `Uncaught TypeError: (0 , _moduleA__WEBPACK_IMPORTED_MODULE_0__.default) is not a function`