import mocha from 'mocha';
import chai, { should } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
chai.should();
chai.use(chaiHttp);

describe('user tests', () => {
    it('user should be able to signup', (done) => {
        const user = {
            firstName: "chretien",
            lastName: "Jean",
            email: "chetien@mentor.com",
            password: "Chretien1234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('data');
                res.body.data.should.have.property('email').eql('chetien@mentor.com');
                res.body.data.should.not.have.property('password');
                done();
            });
    });

    it('user should not be able to signup without password', (done) => {
        const user = {
            firstName: "chretien",
            lastName: "Jean",
            email: "chetien@mentor.com",
        };
        chai.request(app)
            .post('/api/v1/auth/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);

                done();
            });
    });

    it('user should not be able to signup without email', (done) => {
        const user = {
            firstName: "chretien",
            lastName: "Jean",
            password: "Chretien1234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('user should not be able to signup without firstName', (done) => {
        const user = {
            password: "Chretien1234",
            lastName: "Jean",
            email: "chetien@mentor.com"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);

                done();
            });
    });

    it('user should not be able to signup without lastName', (done) => {
        const user = {
            firstName: "chretien",
            email: "chetien@mentor.com",
            password: "Chretien1234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });


    it('user should  be able to signin ', (done) => {
        const user = {
            email: "chetien@mentor.com",
            password: "Chretien1234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('user should not be able to signin with wrong password', (done) => {
        const user = {
            email: "chetien@mentor.com",
            password: "Chretienhsjd873451234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(user)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });

    it('user should not be able to signin with unsignedup email', (done) => {
        const user = {
            email: "cghdtien@mentor.com",
            password: "Chretien1234"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });




});