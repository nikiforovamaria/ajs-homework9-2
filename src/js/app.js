import ArrayBufferConverter from './ArrayBufferConverter';

console.log('worked');

const buffer = new ArrayBufferConverter();
buffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
console.log(buffer.toString());
console.log(buffer);
