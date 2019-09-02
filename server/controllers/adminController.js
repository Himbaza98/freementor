import users from '../data/users';

class Admin {

    static changetomentor(req, res) {
        const { is_admin, id } = req.decode;
        const { userId } = req.params;

        if (!is_admin) {
            return res.status(403).send({
                status: 403,
                message: 'Unauthorized. Only admin can access this page.'
            })
        }

        if (isNaN(userId)) {
            return res.status(400).send({
                status: 400,
                message: 'userId can only be numbers. Please enter a number for the userId.'
            });

        }

        const user = users.find(userInfo => userInfo.id === parseInt(userId));
        if (!user) {
            return res.status(404).send({
                status: 404,
                message: 'User can not be found'
            })
        }

        user.role = 'mentor';
        users[user.id - 1] = user;


        return res.status(200).send({
            status: 200,
            message: 'updated successfully',
            data: user,


        })


    }

}

export default Admin;