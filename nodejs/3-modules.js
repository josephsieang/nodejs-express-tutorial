// CommonJS, every file is module
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-syntax');

// console.log(names);
sayHi(names.john);
console.log(data);
