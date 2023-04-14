import classAInstance from './moduleA';

// Uncaught TypeError: Cannot read properties of undefined (reading 'property')
// const bar = classAInstance.property + 'bar';

// Uncaught TypeError: Cannot read properties of undefined (reading 'property')
// const bar = classAInstance.hello() + 'bar';

// Uncaught TypeError: Cannot read properties of undefined (reading 'property')
const bar = classAInstance.useC() + 'bar';

export default bar;
