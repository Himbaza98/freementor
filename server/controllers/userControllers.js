import users from '../data/users';
import Schema from '../validators/validations';
import Joi from 'joi';
import { hashPassword } from '../helpers/bcryptPwd';
import { checkThePassword } from '../helpers/bcryptPwd';
import { getToken } from '../helpers/Tokens';


class User {
    static SignUp(req, res) { //check sign up details if valid with joi
        const { Email, Firstname, Lastname, Password, address, bio, expertise, occupation, } = req.body;
        let result = Joi.validate({ Email, Firstname, Lastname, Password }, Schema.user_sign_up);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        // check if the user exists
        const Emailfound = users.find(user => user.Email == Email)
        if (!Emailfound) {

            let id = users.length + 1;
            let payload = { id, Firstname, IsAdmin: false, Email, role };

            //hash the Password and generate the Token
            const encryptedPassword = hashPassword(Password);

            let Token = getToken(payload);
            users.push({
                id,
                Email,
                Firstname,
                Lastname,
                Password: encryptedPassword,
                address,
                bio,
                expertise,
                occupation,
                IsAdmin: false,
                role: 'mentee'
            })


            let newUser = { id, Email, Firstname, Lastname, Token };
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
        const { Email, Password } = req.body;
        let result = Joi.validate({ Email, Password }, Schema.user_sign_in);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        //check if the user exists
        const Emailfound = users.find(user => user.Email === Email);

        if (!Emailfound) {
            return res.status(404).json({ status: 404, message: { error: 'There is no such user with this Email' } });
        }
        if (!checkThePassword(Password, Emailfound.Password)) {
            return res.status(401).json({
                status: 401,
                data: {
                    error: 'enter the correct Password'
                }
            });
        }

        const { id, Firstname, Lastname, IsAdmin } = Emailfound;
        const Token = getToken({
            id,
            Firstname,
            Lastname,
            IsAdmin,
            Email
        })


        return res.status(200).json({
            status: 200,
            message: "user found",
            data: {
                id,
                Firstname,
                Lastname,
                Token
            },



        });
    }
}


export default User;