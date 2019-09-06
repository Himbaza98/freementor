import mocha from 'mocha';
import chai, { should } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
chai.should();
chai.use(chaiHttp);
let token;
let token1;
describe('user tests', () => {
    before('admin should login first', (done) => {
        const admin = {
            email: "jean@gmail.com",
            password: "adminpass",
        }
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(admin)
            .end((err, res) => {
                token = res.body.data.token;
                done();
            });
    });


    it('change a user into a mentor', (done) => {
        chai.request(app)
            .patch('/api/v1/user/1')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    it('should  be able to change user into a mentor if not admin ', (done) => {
        const user = {
            email: "john@gmail.com",
            password: "adminpass"
        };
        chai.request(app)
            .post('/api/v1/auth/user/signin')
            .send(user)
            .end((err, res) => {
                token1 = res.body.data.token;
                done();
            });
    });

    it('should not change a user into a mentor if not admin', (done) => {
        chai.request(app)
            .patch('/api/v1/user/1')
            .set('Authorization', `Bearer ${token1}`)
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(403);
                done();
            })
    });

    it('should not change a user into a mentor id is not a number', (done) => {
        chai.request(app)
            .patch('/api/v1/user/${"abc"}')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(400);
                done();
            })
    });

    it('should not change a user into a mentor id is not a number', (done) => {
        chai.request(app)
            .patch('/api/v1/user/78437')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(404);
                done();
            })
    });

});