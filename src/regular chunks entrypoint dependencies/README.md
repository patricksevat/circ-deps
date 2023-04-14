# Regular circ dep

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

## Entrypoint dependencies

3 JS assets generated:
1. `runtime.js` which contains most of webpack specific stuff like module cache, webpack's require logic, chunk loading logic, etc
2. `entry.js` chunk which contains the entrypoint logic
3. `moduleABC.js` chunk which contains `moduleA.js`, `moduleB.js`, `moduleC.js`

Since `entry.js` dependsOn `moduleABC.js` the order of script tags is:

```html
  <script src="./runtime.js"></script>
  <script src="./moduleABC.js"></script>
  <script src="./entry.js"></script>
```

#### JS code execution

- runtime.js sets up Webpack stuff, new global is created: `global["webpackChunkcirc_deps_repro_minimal"]` which is an empty array
- runtime.js execution finishes, browser loads next script: `moduleABC.js`
- `moduleABC` calls `global["webpackChunkcirc_deps_repro_minimal"].push()`
	- Runtime has monkeyPatched the `push` method to call `webpackJsonpCallback` first before adding it to the array
	- `webpackJsonpCallback` checks if the chunk is already installed
		- if it is already installed -> early return
		- if it is not installed:
			- it loops over all the modules in the chunk and registers them in `__webpack_modules__` (aliased by `__webpack_require__.m`).
				- In other words `webpackJsonpCallback` populates the (empty) `__webpack_modules__` with all modules in the chunk
			- it executes the runtime of the chunk (aka runs the code of the entry file)
				- From here it behaves like we have seen earlier with `webpack.require` setting preliminary `module.exports` etc.
			- Once the runtime is completed, we actually do the push to `global["webpackChunkcirc_deps_repro_minimal"].push()`
			- next, `webpackJsonpCallback` registers the chunk as being installed
			- lastly, there is some code which can defer and/or prioritize the loading of additional (child) chunks required by the parent chunk, but not applicable for now
- `moduleABC` execution finished, browser loads next script `entry.js`
	- Runtime has monkeyPatched the `push` method to call `webpackJsonpCallback` first before adding it to the array
	- `webpackJsonpCallback` checks if the chunk is already installed, it is not installed
		- it registers all modules in the chunk in `__webpack_modules__` / `__webpack_require__.m`
		- it executes the runtime function of `entry.js`
			- Before it actually runs the code of `entry.js`, webpack first resolves it's dependencies (`dependsOn`): `entry.js:12`
				- TODO: Check if correct by adding another `dependsOn` dependency or removing `dependsOn` or both
				- the dependency chunk (`moduleABC.js`) is added to the deferred array and returned
				- Next, on line 13: the `entry.js` chunk itself calls defer function
				- The defer queue is processed
					- it checks if the dependent chunk (`moduleABC`) is already installed, it is installed
					- it executes the defer fn (`function () { return __webpack_exec__("./src/regular chunks entrypoint dependencies/entry.js")`)
						- This calls `__webpack_require__("./src/regular chunks entrypoint dependencies/entry.js")` and returns the cached `module.exports` for `entry.js`. It's empty so we continue as normal with preliminary `module.exports`
						- Next we actually run the module function for `entry.js`
							- here we find the require for `moduleABC.js` and read its result from the module cache
							- we console.log the result
							- module function exits
						- `module.exports` is being cached for `entry.js`
				- we finish the defer function
			- we finish runtime
	- push to `global["webpackChunkcirc_deps_repro_minimal"].push()`	
	- mark the chunk as installed
	- do another pass in the deferred function, but no more open chunks to be processed