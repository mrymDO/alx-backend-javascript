const { expect } = require('chai');

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi Test with stub', () => {
  it('should ensure math is the same', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10)
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(50, 10);

    expect(stubUtils.calledOnceWithExactly('SUM', 50, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    consoleLogSpy.restore();
  });
});
