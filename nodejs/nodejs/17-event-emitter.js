const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} with id ${id}`);
}); // subscribe in Angular

customEmitter.on('response', () => {
  console.log(`some other logic`);
}); // subscribe in Angular

customEmitter.emit('response', 'john', 34);
