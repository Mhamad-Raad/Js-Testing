const Cap = require('./Task3.js');

const str = 'hello';

test('test Capitalization', () => {
  expect(Cap(str)).toBe('Hello');
  expect((str) => Cap()).toThrow(Error);
});
