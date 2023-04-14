import { instanceA } from './moduleA';

const bar = () => instanceA.property + 'bar';

// const bar = () => instanceA.hello() + 'bar';

// const bar = () => instanceA.useC() + 'bar';

export default bar;
