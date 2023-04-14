# Class Instance default circ dep, sync

`moduleA` exports a class instance which is directly called by B

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

Outcome is basically same as regular example: `module.exports.default` is undefined, only this time we are looking for `module.exports.default.useC()`

1. moduleA has preliminary `module.exports = {}`
2. When moduleA is required for the second time you get error:
	
	`caught TypeError: Cannot read properties of undefined (reading 'useC')`

	This is caused by line `const bar = _moduleA__WEBPACK_IMPORTED_MODULE_0__["default"].useC() + 'bar';`
	in `moduleB.js`