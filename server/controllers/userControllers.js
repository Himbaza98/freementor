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
  
}


export default User;