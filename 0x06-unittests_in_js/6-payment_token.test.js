const chai = require('chai');

const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('resolved to true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  }));
});
