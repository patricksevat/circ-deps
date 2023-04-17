import c from './moduleC';

const staticA = 'a';
const infinite = () => c()+'b';

export {
  staticA,
  infinite,
}
