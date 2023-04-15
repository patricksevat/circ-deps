import useImportedValue from './moduleA';

const direct = `useImportedValue from moduleA: ${useImportedValue}`;
const indirectFn = () => `useImportedValue from moduleA: ${useImportedValue}`;

const bStatic = 'bStatic'

export {direct, indirectFn, bStatic};