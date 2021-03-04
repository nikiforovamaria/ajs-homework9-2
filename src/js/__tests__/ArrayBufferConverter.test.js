import ArrayBufferConverter from '../ArrayBufferConverter';

test('should convert string to buffer', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(buffer.toString()).toEqual(result);
});
