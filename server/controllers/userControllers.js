import users from '../data/users';
import Schema from '../validators/validations';
import Joi from 'joi';
import { hashPassword } from '../helpers/bcryptPwd';
import { checkThePassword } from '../helpers/bcryptPwd';
import { getToken } from '../helpers/tokens';


class User {
    static SignUp(req, res) { //check sign up details if valid with joi
        const { email, firstName, lastName, password, address, bio, expertise, occupation, } = req.body;
        let result = Joi.validate({ email, firstName, lastName, password }, Schema.user_sign_up);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        // check if the user exists
        const emailFound = users.find(user => user.email == email)
        if (!emailFound) {

            let id = users.length + 1;
            let payload = { id, firstName, IsAdmin: false, Email, role };

            //hash the Password and generate the token
            const encryptedPassword = hashPassword(password);

            let token = getToken(payload);
            users.push({
                id,
                email,
                firstName,
                lastName,
                password: encryptedPassword,
                address,
                bio,
                expertise,
                occupation,
                IsAdmin: false,
                role: 'mentee'
            })


            let newUser = { id, email, firstName, lastName, token };
            return res.status(201).send({
                status: 201,
                message: "user created successfully",
                data: newUser,
            })


        }
        return res.status(401).send({
            status: 401,
            error: "The user with Email arleady exists"
        });



    };
    static SignIn(req, res) {
        //check if sign in data are full
        const { email, password } = req.body;
        let result = Joi.validate({ email, password }, Schema.user_sign_in);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        //check if the user exists
        const emailFound = users.find(user => user.email === email);

        if (!emailFound) {
            return res.status(404).json({ status: 404, message: { error: 'There is no such user with this email' } });
        }
        if (!checkThePassword(password, emailFound.password)) {
            return res.status(401).json({
                status: 401,
                data: {
                    error: 'enter the correct Password'
                }
            });
        }

        const { id, firstName, lastName, IsAdmin } = emailFound;
        const token = getToken({
            id,
            firstName,
            lastName,
            IsAdmin,
            email
        })


        return res.status(200).json({
            status: 200,
            message: "user found",
            data: {
                id,
                firstName,
                lastName,
                token
            },



        });
    }
}


export default User;