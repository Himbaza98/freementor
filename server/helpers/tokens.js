import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const getToken = (payload) => { return jwt.sign(payload, process.env.SECRET_KEY) };
export const decoded = (req) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return ({ status: 401, message: "There is no user with this token" });
    }
}

export default { getToken, decoded };