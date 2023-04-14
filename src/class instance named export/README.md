# Class Instance named export circ dep, sync

`moduleA` exports a class instance which is directly called by B

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

Same as regular named exports

Uncaught ReferenceError: Cannot access 'instanceA' before initialization