# Default exports circ dep (ES6)

## Takeaways

- Behaves similar to named exports
- Has slight bundle size overhead due to webpack specific functions for hasOwnProperty and defining a getter for the `default` export

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

See the named exports example, it's very similar, since `module.default` becomes a getter and thus throws an error:
`Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization`