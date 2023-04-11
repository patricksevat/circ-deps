# (Not a) circ dep with copied file

The example in this directory is a slight variation of the [regular initialization error example](../regular%20initialization%20error/), 
but with a slightly different a circular dependency by breaking the circular dependency by copying one of the files

## How does the import chain look like?

Both `a` and `a copy` have a named exports: `export {a, abc,}`


The circular dependency chain looks like:

```
entry -> a -> c -> b -> "a copy" -> c (-> b -> "a copy")
```

## Why does the error not occur here?

In contrast to the previous example, 

## What steps are taken by compiled code?

0. Webpack compiles into an IIFE
1. entry point runs
  1. entry point requires `a`
  1. webpack looks up `a` in the module cache, it's not there
  2. webpack provisionally sets `module.exports = {}`
  3. webpack executes the module function from `__webpack_modules__`
  3. webpack creates the getters on `module.exports` for the named exports (`a` and `abc`)
  4. webpack sees that `a` requires `c`
  2. `c` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `c` requires `b`
  5. `b` is being looked up in the module cache, it not there
  3. webpack executes the module function from `__webpack_modules__`
  4. webpack sees that `b` requires `a copy`
  5. `a copy` is being looked up in the module cache, it not there
  6. webpack executes the module function from `__webpack_modules__`
  7. webpack provisionally sets `module.exports = {}`
  8. webpack created the getters on `module.exports` for the named exports (`a` and `abc`)
  8. webpack sees that `a copy` requires `c` and reads from cache (with provisional exports)
    a. NOTE: since `c` is read from cache, we no longer have to go through the source code from `c`, e.g. not visiting `b` and `a copy` again!
  9. webpack sets values for `const a` and `const abc`
    a. `const a` is assigned value `a`
    b. `const abc` is `const abc = c+'b';` in this case we use provisional exports from `c` which makes the eventual value `'undefinedb'`
  10. the `module.exports` for `a copy` is set and returned to `b` for use
  11. `b` reads the `a.a` **getter** which returns the value of `const a` (which is value `'a'`), sets its `module.exports` and returns to `c` for use
  12. `c` reads value of `b`, sets its `module.exports` and returns to `a` for use
  13. `a` reads the value of `c` and sets its own exported values (`a` and `abc`), where `abc` uses the `a` value from `a copy`


