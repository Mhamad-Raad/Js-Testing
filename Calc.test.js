const Calc = require('./Test2');

const math = new Calc();

describe('my Calculations', () => {

  test('should ADD', () => { 
    expect(math.add(1, 2)).toBe(3);
    expect(math.add(2, 3)).toBe(5);
    expect(math.add(3, 4)).toBe(7); 
    // expect( math.add(0, 2)).toThrow(Error);
  });

  test('should Subtract', () => {
    expect(math.subtract(2, 1)).toBe(1);
    expect(math.subtract(4, 2)).toBe(2);
    expect(math.subtract(2, 1)).toBe(1);
    // expect(math.subtract(0, 2)).toThrow(Error);
  });

  test('should Multiply', () => {
    expect(math.multiply(2, 1)).toBe(2);
    expect(math.multiply(4, 2)).toBe(8);
    expect(math.multiply(2, 10)).toBe(20);
    // expect(math.multiply(0, 2)).toThrow(Error);
  });

  test('should Divide', () => {
    expect(math.divide(2, 1)).toBe(2);
    expect(math.divide(4, 2)).toBe(2);
    expect(math.divide(10, 2)).toBe(5);
    // expect(math.divide(0, 2)).toThrow(Error);
  });


});
