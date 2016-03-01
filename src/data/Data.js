/**
 * Data
 */

'use strict';

import DataFake from './DataFake';
import DataVanilla from './DataVanilla';

let instance = DataVanilla.instance;

console.log('Vanilla instance ' + instance);

export default instance;

