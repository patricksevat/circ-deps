import { staticA, outsideCircDepChain } from './moduleA';

console.log(({ staticA, namedWithImportedValue: outsideCircDepChain() }));