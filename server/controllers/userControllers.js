import users from '../data/users';
import schema from '../validators/validations';
import Joi from 'joi';
import { hashPassword } from '../helpers/bcryptPwd';
import { checkThepassword } from '../helpers/bcryptPwd';
import { getToken } from '../helpers/tokens';


class User {
    static SignUp(req, res) { //check sign up details if valid with joi
        const { email, firstname, lastname, password, address, bio, expertise, occupation, } = req.body;
        let result = Joi.validate({ email, firstname, lastname, password }, schema.user_sign_up);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        // check if the user exists
        const emailfound = users.find(user => user.email == email)
        if (!emailfound) {

            let id = users.length + 1;
            let payload = { id, firstname, is_admin: false };

            //hash the password and generate the token
            const encryptedPassword = hashPassword(password);

            let token = getToken(payload);
            users.push({
                id,
                email,
                firstname,
                lastname,
                password: encryptedPassword,
                address,
                bio,
                expertise,
                occupation,
                is_admin: false,
                role: 'mentee'
            })


            let newUser = { id, email, firstname, lastname, token };
            return res.status(201).send({
                status: 201,
                message: "user created successfully",
                data: newUser,
            })


        }
        return res.status(401).send({
            status: 401,
            error: "The user with email arleady exists"
        });



    };
    static SignIn(req, res) {
        //check if sign in data are full
        const { email, password } = req.body;
        let result = Joi.validate({ email, password }, schema.user_sign_in);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        //check if the user exists
        const emailfound = users.find(user => user.email === email);

        if (!emailfound) {
            return res.status(404).json({ status: 404, message: { error: 'There is no such user with this email' } });
        }
        if (!checkThepassword(password, emailfound.password)) {
            return res.status(401).json({
                status: 401,
                data: {
                    error: 'enter the correct password'
                }
            });
        }

        const { id, firstname, lastname, is_admin } = emailfound;
        const token = getToken({
            id,
            firstname,
            lastname,
            is_admin
        })


        return res.status(200).json({
            status: 200,
            message: "user found",
            data: {
                id,
                firstname,
                lastname,
                token
            },



        });
    }
}


export default User;