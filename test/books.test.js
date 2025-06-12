const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { initBooks } = require('../src/models/book.model');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Library API', () => {
  before(() => {
    initBooks();
  });

  describe('GET /v1/books', () => {
    it('should return all books', (done) => {
      chai.request(app)
        .get('/v1/books')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.greaterThan(0);
          done();
        });
    });

    it('should search books by query', (done) => {
      chai.request(app)
        .get('/v1/books?q=Clean')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.some(book => book.title.includes('Clean'))).to.be.true;
          done();
        });
    });
  });

  describe('POST /v1/books/rent/:userId', () => {
    it('should rent a book', (done) => {
      chai.request(app)
        .post('/v1/books/rent/1')
        .send({ bookId: 1 })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message');
          done();
        });
    });

    it('should not rent an already rented book', (done) => {
      chai.request(app)
        .post('/v1/books/rent/1')
        .send({ bookId: 1 })
        .end((err, res) => {
          expect(res).to.have.status(409);
          done();
        });
    });
  });
});