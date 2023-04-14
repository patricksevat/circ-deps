# Regular circ dep with dynamic import from entry

## How does the circ dep look like?

A regular circular dependency with Webpack 5 looks like this:

```
entry -> moduleA -> moduleC -> moduleB -> moduleA
```

## Chunks

There are several ways to achieve more chunks in Webpack:

1. Create another entrypoint
	a. Not applicable here, we would only duplicate the circ dep
	b. When using static analysis, it might be interesting to take this into account: only perform static analysis from these entry points
2. Use [entryPoint dependencies](https://webpack.js.org/configuration/entry-context/#dependencies)
	a. Interesting here as it allows us to move the circ dep to a separate chunk
3. Use `optimization.splitChunks`: https://webpack.js.org/plugins/split-chunks-plugin/ 
	a. Interesting here as it allows us to move the circ dep to a separate chunk
4. Use dynamic imports
	a. Interesting here as it allows us to move the circ dep to a separate chunk

Good to know:

1. When using multiple entrypoints, if those entrypoint depend on the same module, that module in bundled in each of the entrypoint chunks, leading to duplication
	a. By default, every entry chunk stores all the modules that it uses. With dependOn option you can share the modules from one entry chunk to another. https://webpack.js.org/configuration/entry-context/#dependencies 
2. 

## Dynamic imports

3 JS assets generated:
1. `runtime.js` which contains most of webpack specific stuff like module cache, webpack's require logic, chunk loading logic, etc
2. `chunkEntry.js` chunk which contains the entrypoint logic
3. `chunkABC.js` chunk which contains `moduleA.js`, `moduleB.js`, `moduleC.js`

This scenario does not differ from the entrypoint dependencies example. Here, `chunkEntry.js` also has a dependency on `chunkABC.js`.
This means that chunk resolution order is similar, just like module resolution mechanisms.
