import useImportedValue from './moduleA';

const direct = useImportedValue;
const indirectFn = () => useImportedValue;

const bStatic = 'bStatic'

export {direct, indirectFn, bStatic};