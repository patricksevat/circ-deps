import c from './moduleC';

const namedA = () => 'a';
const namedWithImportedValue = () => c()+'b';

export {
  namedA,
  namedWithImportedValue,
}
