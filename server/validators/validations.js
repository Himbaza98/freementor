import Joi from 'joi';
// import hapiJoi from '@hapi/joi';

const Schema = {
    user: Joi.object().keys({
        user_id: Joi.number().min(3).max(5),
        Firstname: Joi.string().min(3).max(30).required(),
        Lastname: Joi.string().min(3).max(30).required(),
        Email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        IsAdmin: Joi.string().valid(true, false),

    }),
    user_sign_up: Joi.object().keys({
        Firstname: Joi.string().min(3).max(30).required(),
        Lastname: Joi.string().min(3).max(30).required(),
        Email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        Token: [Joi.string(), Joi.number()],
        IsAdmin: Joi.string().valid(true, false),
        user_status: Joi.string().valid(true, false),


    }),
    user_sign_in: Joi.object().keys({
        Email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        Password: Joi.string().required(),
        Token: [Joi.string(), Joi.number()],
        IsAdmin: Joi.string().valid(true, false),
        user_status: Joi.string().valid(true, false),
    }),

    roles: Joi.object().keys({
        status: Joi.string().valid('mentee', 'mentor')
    }),
    sessions: Joi.object().keys({
        sessionId: Joi.number(),
        Questions: Joi.string().min(3).max(30).required(),
    }),
}

module.exports = Schema