import { namedA, namedWithImportedValue } from './moduleA';

console.log(({ namedA: namedA(), namedWithImportedValue: namedWithImportedValue() }));