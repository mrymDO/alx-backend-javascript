const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculate number function', () => {
  it('sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
  });

  it('sum of two floats', () => {
    assert.strictEqual(calculateNumber(1.7, 1.7), 4);
  });

  it('sum of integer and float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('round down two floating numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('calculates two floats with border line', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('round up two floating numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });
});
