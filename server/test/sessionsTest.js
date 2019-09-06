import mocha from 'mocha';
import chai, { should } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
chai.should();
chai.use(chaiHttp);
let token2;
describe('sessions', () => {
    before('should first get the token', (done) => {
        const admin = {
            email: "bookchretien@gmail.com",
            password: "myPassword",
        }
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(admin)
            .end((err, res) => {
                token2 = res.body.data.token;
                done();
            });
    });

    it('should request a session', (done) => {
        const mentor = {
            mentorId: 7,
            questions: 'what is the best framework?'
        }
        chai.request(app)
            .post('/api/v1/sessions/')
            .set('Authorization', `Bearer ${token2}`)
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });

    it('should not request a session without mentorId', (done) => {
        const mentor = {
            questions: 'what is the best framework?'
        }
        chai.request(app)
            .post('/api/v1/sessions/')
            .set('Authorization', `Bearer ${token2}`)
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    });

    it('should not request a session without question', (done) => {
        const mentor = {
            mentorId: 7
        }
        chai.request(app)
            .post('/api/v1/sessions/')
            .set('Authorization', `Bearer ${token2}`)
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    });


    it('should not request a session if mentor not found', (done) => {
        const mentor = {
            mentorId: 0,
            questions: 'what is the best framework?'
        }
        chai.request(app)
            .post('/api/v1/sessions/')
            .set('Authorization', `Bearer ${token2}`)
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    });

    it('should accept the session', (done) => {
        const mentor = {
            mentorId: 0,
            questions: 'what is the best framework?'
        }
        chai.request(app)
            .patch('/api/v1/sessions/1/accept')
            .set('Authorization', `Bearer ${token2}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    it('should accept the session which is not present', (done) => {
        const mentor = {
            mentorId: 0,
            questions: 'what is the best framework?'
        }
        chai.request(app)
            .patch('/api/v1/sessions/0/accept')
            .set('Authorization', `Bearer ${token2}`)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    });

});