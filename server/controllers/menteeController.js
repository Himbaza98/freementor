import users from '../data/users';
import { hashPassword } from '../helpers/bcryptPwd';
import { getToken } from '../helpers/Tokens';


class View {

    static ViewMentors(req, res) {

        const mentors = users.filter(user => user.role == "mentor")
        const user_status = users.filter(user => user.user_status === true)

        if (user_status) {
            return res.status(200).send({
                status: 200,
                data: mentors
            })
        }

        if (!user_status) {
            return res.status(403).send({
                status: 403,
                message: 'unauthorised access!'
            });

        }

    };
    static ViewSpecificMentor(req, res) {
        const userId = req.params.mentor_id;
        const mentor = users.filter(user => user.id == userId);

        if (mentor) {
            return res.status(200).send({
                status: 200,
                data: mentor
            })
        }

        if (!mentor) {
            return res.status(400).send({
                status: 400,
                message: 'mentor not found!'
            });

        }

    }
}

export default View;