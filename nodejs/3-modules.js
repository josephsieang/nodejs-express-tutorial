// CommonJS, every file is module
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-name');
const sayHi = require('./5-utils');

// console.log(names);
sayHi(names.john);
