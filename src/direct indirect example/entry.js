// needed to ensure right order of module processing for this example
import './moduleA.js';

import { direct, indirectFn } from './moduleB.js'

// returns:
// {
//  direct: 'useImportedValue from moduleA: undefined', 
//  indirectFn: 'useImportedValue from moduleA: bStatic imported from ./moduleB'
// }
console.log({direct, indirectFn: indirectFn() })