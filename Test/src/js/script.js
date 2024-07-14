// #102 ES6 Module
// import { one, two } from './main';
import sayHi from './main.js';
import * as data from './main.js';
// all import
console.log(`${data.one} and ${data.two}`);
// data.sayHi();
sayHi();
// import { one, as first} from './main'; rename

// console.log(`${one} and ${two}`);
