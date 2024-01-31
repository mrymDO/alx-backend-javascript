const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI Test with Hooks', () => {
	let consoleLogSpy;
	beforeEach(() => {
		consoleLogSpy = sinon.spy(console, 'log');
	});
	afterEach(() => {
		consoleLogSpy.restore();
	});
	it('test function called with args 100 and 20', () => {
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
	});
	it('test function called with args 10 and 10', () => {
		sendPaymentRequestToApi(10, 10);
		expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
	});
});
