const request = require('request');
const { expect } = require('chai');

describe('aPI Integration Test', () => {
  const API_URL = 'http://localhost:7865';
  it('gET / should return correct response', () => new Promise((done) => {
    const options = {
      url: `${API_URL}/`,
      method: 'GET',
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
