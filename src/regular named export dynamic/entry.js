import { namedA, namedWithImportedValue } from './moduleA';

namedWithImportedValue().then((value) => {
  console.log({namedA, namedWithImportedValueResolved: value})
})