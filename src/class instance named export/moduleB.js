import { instanceA } from './moduleA';

// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
 
const bar = instanceA.property + 'bar';

// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
// const bar = instanceA.hello() + 'bar';

// Uncaught ReferenceError: Cannot access 'instanceA' before initialization
// const bar = instanceA.useC() + 'bar';

export default bar;
