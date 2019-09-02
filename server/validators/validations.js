import Joi from 'joi';
// import hapiJoi from '@hapi/joi';

const schema = {
    user: Joi.object().keys({
        user_id: Joi.number().min(3).max(5),
        firstname: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        lastname: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        is_admin: Joi.string().valid(true, false),

    }),
    user_sign_up: Joi.object().keys({
        firstname: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        lastname: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        token: [Joi.string(), Joi.number()],
        is_admin: Joi.string().valid(true, false),


    }),
    user_sign_in: Joi.object().keys({
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        token: [Joi.string(), Joi.number()],
        is_admin: Joi.string().valid(true, false),
    }),

}

module.exports = schema