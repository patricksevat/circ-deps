const namedA = 'a';
const namedWithImportedValue = async () => {
  const moduleC = await import('./moduleC' /* webpackChunkName: "dynamicImportChunk" */);
  return moduleC.default + ' dynamic';
};

export {
  namedA,
  namedWithImportedValue,
}
