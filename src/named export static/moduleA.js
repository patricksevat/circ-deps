import c from './moduleC';

const staticA = 'a';
const namedWithImportedValue = () => c()+'b';

export {
  staticA,
  namedWithImportedValue,
}
