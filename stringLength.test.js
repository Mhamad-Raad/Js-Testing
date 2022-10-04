const stringLength = require('./Test.js');
const str = 'Hello';

test('check length', () => { 
  expect(stringLength(str)).toBe(5);

  expect((str) => stringLength()).toThrow(Error);
 });