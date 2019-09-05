import Joi from 'joi';
// import hapiJoi from '@hapi/joi';

const Schema = {
    user: Joi.object().keys({
        user_id: Joi.number().min(3).max(5),
        firstName: Joi.string().min(3).max(30).required(),
        lastName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        IsAdmin: Joi.string().valid(true, false),

    }),
    user_sign_up: Joi.object().keys({
        firstName: Joi.string().min(3).max(30).required(),
        lastName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        IsAdmin: Joi.string().valid(true, false),
        user_status: Joi.string().valid(true, false),


    }),
    user_sign_in: Joi.object().keys({
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().required(),
        IsAdmin: Joi.string().valid(true, false),
        user_status: Joi.string().valid(true, false),
    }),

    roles: Joi.object().keys({
        status: Joi.string().valid('mentee', 'mentor')
    }),
    sessions: Joi.object().keys({
        mentorId: Joi.number().required(),
        questions: Joi.string().min(3).max(30).required(),
    }),
}

module.exports = Schema