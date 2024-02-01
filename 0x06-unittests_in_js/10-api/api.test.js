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

  it('gET /cart/:id returns payment methods for valid cart ID', () => new Promise((done) => {
    request.get(`${API_URL}/cart/123`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  }));

  it('gET /cart/:id returns 404 for an invalid cart ID', () => new Promise((done) => {
    request.get(`${API_URL}/cart/a-bc`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
  it('pOST /login returns welcome username', () => new Promise((done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'testuser' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome testuser');
      done();
    });
  }));
  it('gET //available_payments', () => new Promise((done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  }));
});
