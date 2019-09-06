import bcrypt from 'bcrypt';
import { getToken } from '../helpers/tokens';
import { hashPassword } from '../helpers/bcryptPwd';
const users = [{
        id: 1,
        email: "bookchretien@gmail.com",
        firstName: "himbaza",
        lastName: "chretien",
        address: "kigali",
        bio: "hazard",
        expertise: "dabroo",
        occupation: "killla",
        password: hashPassword('myPassword'),
        IsAdmin: false,
        role: "mentee",
        user_status: true

    }, {
        id: 2,
        email: "jean@gmail.com",
        firstName: "jean",
        lastName: "erre",
        password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        IsAdmin: true,
        role: "mentor",
        user_status: true
    },

    {
        id: 7,
        email: "john@gmail.com",
        firstName: "jean",
        lastName: "erre",
        password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        IsAdmin: false,
        role: "mentor",
        user_status: true
    },


    {
        id: 3,
        email: "peter@gmail.com",
        firstName: "mugish",
        lastName: "ejack",
        Password: hashPassword("notadminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        IsAdmin: false,
        role: "mentor",
        user_status: true
    }




];


export default users;