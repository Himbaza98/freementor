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
    isAdmin: false,
    role: "mentee"

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
    role: "mentee"
}];


export default users;