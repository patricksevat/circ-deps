# About this repo

This repo showcases a couple different ways how circular dependencies are being handled by Webpack

## Interactive explainer

If you are just interested in learning how circular dependencies in Webpack work, the [explainer app](https://circ-deps.vercel.app/) is made for you

## The src examples

- All src examples can be built by using the accompanying script in `package.json`
  - It will output to the `src/{exampleName}/dist` folder
  - Webpack will add its own comments to the generated files. I use [a VS Code extension](https://marketplace.visualstudio.com/items?itemName=jinpeng.remove-comments-vscode) to remove comments manually before committing
  - I'll format manually using JS language features before committing as well
  - Sometimes I'll add some empty lines for readability
- Almost all src examples can be run locally by opening the `dist/html` file. This will allow you to set your own breakpoints to explore that example
  - The only exception is `regular named export dynamic esm` which requires a a small server to be spinned up: `npx http-server "./src/regular named export dynamic esm/dist"`

## The explainer app

The explainer app is a simple NextJS app which uses [CodeHike](https://codehike.org/) for the code examples.

You can spin up this app locally by running `yarn dev`
