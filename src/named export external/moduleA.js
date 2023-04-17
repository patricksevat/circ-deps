import c from './moduleC';
import { outside } from './outsideCircDepChain';

const staticA = 'a';
const namedWithImportedValue = () => c()+'b';
const outsideCircDepChain = () => outside + 'a suffix'

export {
  staticA,
  // namedWithImportedValue,
  outsideCircDepChain,
}
