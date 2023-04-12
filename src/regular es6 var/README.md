# Regular circ dep es6 using var

Previous example used `const` and threw an error, does using `var` in `moduleA.js make a difference?

No, `__WEBPACK_DEFAULT_EXPORT__` is still defined as `const`, so error remain same:

`Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization`
 

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

