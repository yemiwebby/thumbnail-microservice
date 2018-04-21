import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';
// import 

const { expect, assert, should } = chai;
should();

chai.use(chaiHttp);

let loginURL = '/api/v1/auth/login';

describe('TEST for User Public Route', () => {
    describe('When user sends a POST request to /api/v1/auth/login', () => {
        it('It should return a status 200 and a response message', (done) => {
            chai.request(app)
            .post(loginURL)
            .send({
                username:'oluyemi',
                password: 'oluyemi'
            })
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.be.a('object');
                assert.equal(
                    res.body.message,
                    'Logged in successfully'
                );
                done();
            });
        });

        it('It should return a status 401 and a response message', (done) => {
            chai.request(app)
            .post(loginURL)
            .send({
                username: '',
                password: ''
            })
            .end((err, res ) => {
                res.should.have.status(401);
                expect(res.body).to.be.a('object');
                assert.equal(
                    res.body.message,
                    'All or some of the field is/are undefined'
                );
                done();
            })
        })
    });
});