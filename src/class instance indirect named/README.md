# Class Instance named export, indirect circ dep, sync

`moduleA` exports a class instance which is indirectly called by B

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## What steps are taken by compiled code?

This example is the same as [regular indirect named export](../regular indirect named export/README.md)