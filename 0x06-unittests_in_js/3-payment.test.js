const { expect } = require('chai');

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should ensure math is the same', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(50, 10);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 50, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 60')).to.be.true;

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
