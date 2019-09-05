import users from '../data/users';
import Schema from '../validators/validations';
import Joi from 'joi';
import { getToken, decoded } from '../helpers/Tokens';
import bodyParser from 'body-parser';
import sessions from '../data/sessions'


class Mentorship {


    static BookSession(req, res) {
        const user_status = users.find(user => user.user_status === true)
        if (user_status) {
            let { mentorId } = req.body;

            const { Questions } = req.body;
            let result = Joi.validate({ Questions }, Schema.sessions);

            if (result.error) {
                return res.status(400).json({
                    status: 400,
                    message: `${result.error.details[0].message}`
                });

            };
            let sessionId = sessions.length + 1;
            const userId = mentorId;

            const mentor = users.find(user => user.id == userId);

            if (!mentor) {
                return res.status(404).json({
                    status: 404,
                    message: "the session to book was not found"
                })
            };
            const payload = decoded(req);

            const Email = payload.Email;

            const menteeId = payload.id;

            const newSession = {
                menteeId,
                Email,
                sessionId,
                mentorId,
                Questions,
                status: "pending"
            }

            return res.status(201).json({ status: 201, message: "session Booked", data: newSession })
        }

        return res.status(401).json({ status: 401, message: "You are unauthorized for this operation. Sign in first" })
    };

}

export default Mentorship;