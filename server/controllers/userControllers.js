const users = require('../data/users');
const schema = require('../validators/validations');
const Joi = require('joi');

const SignUp = (req, res) => {
    const { email, firstname, lastname, password, address, bio, expertise, occupation } = req.body;

    let result = Joi.validate({ email, first_name, last_name, password, is_admin }, schema.user_sign_up);
    if (result.error) {
        return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
    };

    const emailfound = users.find(user => user.email == email)
    if (!emailfound) {
        console.log("resulys");

        users.push({ email, firstname, lastname, password, address, bio, expertise, occupation })
        return res.status(200).send({
            status: 201,
            message: "user created successfully",
            data: {
                token: "string",
                message: "user created successfully",
                user: { email, firstname, lastname, address, bio, expertise, occupation },
            }
        })
    }
    return res.status(409).send({
        error: "The user with email arleady exists"
    })
};

module.exports = SignUp;