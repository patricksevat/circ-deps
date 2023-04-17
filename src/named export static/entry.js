import { staticA, namedWithImportedValue } from './moduleA';

console.log(({ staticA, namedWithImportedValue: namedWithImportedValue() }));