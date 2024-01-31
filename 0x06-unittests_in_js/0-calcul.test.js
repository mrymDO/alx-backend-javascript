const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculate number function', () => {
  it('sum of two integers', () => {
    assert.equal(calculateNumber(1, 1), 2);
  });
  it('sum of two floats', () => {
    assert.equal(calculateNumber(1.7, 1.7), 4);
  });
});
