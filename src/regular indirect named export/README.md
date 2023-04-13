# Named export circ dep with initialization error

## The error msg

```
main.js:11 Uncaught ReferenceError: Cannot access 'abc' before initialization
    at Module.abc (main.js:11:44)
    at ./src/regular initialization error/b.js (main.js:32:45)
    at __webpack_require__ (main.js:72:41)
    at ./src/regular initialization error/c.js (main.js:43:60)
    at __webpack_require__ (main.js:72:41)
    at ./src/regular initialization error/a.js (main.js:13:60)
    at __webpack_require__ (main.js:72:41)
    at main.js:112:60
    at main.js:116:2
    at main.js:117:12
```

## How does the circ dep look like?

This requires a named esModule export (aka `export { foo, bar }`)!


The circular dependency chain looks like:

```
entry -> a -> c -> b -> a
```

## What steps are taken by compiled code?

0. Webpack compiles into an IIFE
1. entry point runs
  1. entry point requires `a`
  1. webpack looks up `a` in the module cache, it's not there
  2. webpack provisionally sets `module.exports = {}`
  3. webpack executes the module function from `__webpack_modules__`
  3. !!!IMPORTANT!!! webpack created the getters on `module.exports` for the named exports
    a. It's important to note that variable scoping is key here. `const` do not get hoisted
    b. The actual values are defined AFTER all the imports are resolved! So Webpack is setting getters which access values which have not been initialized yet UNTIL all the imports are resolved.
  4. webpack sees that `a` requires `c`
  2. `c` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `c` requires `b`
  5. `b` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `b` requires `a`
  5. !!!IMPORTANT!!! the getters are defined on `module.exports`
  6. When `b` accesses one of the getters from `a` the error is thrown
  7. The error ensures that the rest of the code is NOT executed anymore -> this can be a cause of white screens!
