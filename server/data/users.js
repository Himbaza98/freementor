import bcrypt from 'bcrypt';
import { getToken } from '../helpers/tokens';
import { hashPassword } from '../helpers/bcryptPwd';
const users = [{
        id: 1,
        email: "bookchretien@gmail.com",
        firstname: "himbaza",
        lastname: "chretien",
        address: "kigali",
        bio: "hazard",
        expertise: "dabroo",
        occupation: "killla",
        password: hashPassword('mypassword'),
        is_admin: false,
        role: "mentee",
        user_status: true

    }, {
        id: 2,
        email: "jean@gmail.com",
        firstname: "jean",
        lastname: "erre",
        password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        is_admin: true,
        role: "mentor",
        user_status: true
    },


    {
        id: 3,
        email: "chret@gmail.com",
        firstname: "mugish",
        lastname: "ejack",
        password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        is_admin: false,
        role: "mentor",
        user_status: true
    }




];


export default users;