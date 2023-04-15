# Named export with dynamic import (indirect) ES Modules

## How does the circ dep look like?

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

## ES Modules changes

Compared to the Dynamic Imports with Named exports example which outputs as CJS, there are very few changes. Webpack now outputs `.mjs` in stead of `.js` and the dynamic loading of chunks has a change to facilitate this. But the resolving logic for chunks and modules is the same.

## Dynamic imports with named exports

2 JS assets generated:
1. `main.js` which contains most of webpack specific stuff and `moduleA.js`
2. `dynamicImportChunk.js` which contains `moduleB` and `moduleC`

`main.js` has some new Webpack code mainly relating to requesting dynamic chunks. It actually temporarily appends a <script> tag to the head until it is done fetching

## Circ dep implications

In essence it is still the same as regular named exports. It's possible to have a circ dep which doesn't harm. But it is also possible to have a circ dep which causes a `cannot access before initialization`