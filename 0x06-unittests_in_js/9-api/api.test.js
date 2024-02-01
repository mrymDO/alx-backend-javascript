const request = require('request');
const { expect } = require('chai');
const app = require('./api');

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

  it('gET /cart/:id returns payment methods for valid cart ID', () => new Promise((done) => {
    const validCartId = 123;

    request(app)
      .get(`/cart/${validCartId}`)
      .expect(200)
      .expect(`Payment methods for cart ${validCartId}`)
      .end(done);
  }));

  it('gET /cart/:id returns 404 for an invalid cart ID', () => new Promise((done) => {
    const invalidCartId = 'abc';

    request(app)
      .get(`/cart/${invalidCartId}`)
      .expect(404)
      .end(done);
  }));
});
