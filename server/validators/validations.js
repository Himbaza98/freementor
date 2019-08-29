import Joi from 'joi';
// import hapiJoi from '@hapi/joi';

const schema = {
    user: Joi.object().keys({
        user_id: Joi.number().min(3).max(5),
        first_name: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        last_name: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),

    }),
    user_sign_up: Joi.object().keys({
        first_name: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        last_name: Joi.string().regex(/^\S[A-Za-z]{1,}$/).min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),


    }),
    user_sign_in: Joi.object().keys({
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        token: [Joi.string(), Joi.number()],

    }),
}

module.exports = schema