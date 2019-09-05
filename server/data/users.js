import bcrypt from 'bcrypt';
import { getToken } from '../helpers/Tokens';
import { hashPassword } from '../helpers/bcryptPwd';
const users = [{
        id: 1,
        Email: "bookchretien@gmail.com",
        Firstname: "himbaza",
        Lastname: "chretien",
        address: "kigali",
        bio: "hazard",
        expertise: "dabroo",
        occupation: "killla",
        Password: hashPassword('myPassword'),
        IsAdmin: false,
        role: "mentee",
        user_status: true

    }, {
        id: 2,
        Email: "jean@gmail.com",
        Firstname: "jean",
        Lastname: "erre",
        Password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        IsAdmin: true,
        role: "mentor",
        user_status: true
    },


    {
        id: 3,
        Email: "chret@gmail.com",
        Firstname: "mugish",
        Lastname: "ejack",
        Password: hashPassword("adminpass"),
        address: "gikondo",
        expertise: "dav",
        occupation: "web designer",
        IsAdmin: false,
        role: "mentor",
        user_status: true
    }




];


export default users;