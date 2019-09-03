import users from '../data/users';

class view {

    static viewmentors(req, res) {

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

    }
}
export default view;