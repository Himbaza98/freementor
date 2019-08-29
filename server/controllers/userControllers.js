import users from '../data/users';
import schema from '../validators/validations';
import Joi from 'joi';
class User {
    static SignUp(req, res) { //check sign up details if valid with joi
        const { email, firstname, lastname, password, address, bio, expertise, occupation } = req.body;

        let result = Joi.validate({ email, firstname, lastname, password }, schema.user_sign_up);
        if (result.error) {
            return res.status(400).json({ status: 400, message: `${result.error.details[0].message}` });
        };
        // check if the user exists
        const emailfound = users.find(user => user.email == email)
        if (!emailfound) {

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


}
export default User;