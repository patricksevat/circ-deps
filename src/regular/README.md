# Regular circ dep

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> a -> c -> b -> a
```

## What steps are taken by compiled code?

0. Webpack compiles into an IIFE
1. entry point runs
  1. entry point requires `a`
    1. webpack looks up `a` in the module cache, it's not there
    2. !!!IMPORTANT!!! webpack provisionally sets `module.exports = {}`
    3. webpack executes the module function from `__webpack_modules__`
    4. webpack sees that `a` requires `c`
  2. `c` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `c` requires `b`
  5. `b` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `b` requires `a`
  5. !!!IMPORTANT!!! `a` is available in the module cache !!!with provisional `module.exports = {}`
  6. the result of `b` with "wrong" value of `a` is stored in module cache
  7. the result of `c` is stored in module cache
  8. the result of `a` is being stored in module cache !!!but now with correct `module.exports.default`
