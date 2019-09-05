import jwt from 'jsonwebToken';
import dotenv from 'dotenv';

dotenv.config();
export const getToken = (payload) => { return jwt.sign(payload, process.env.SECRET_KEY) };
export const decoded = (req) => {
    try {
        const Token = req.headers.authorization.split(" ")[1];
        return jwt.verify(Token, process.env.SECRET_KEY);
    } catch (error) {
        return ({ status: 401, message: "There is no user with this Token" });
    }
}

export default { getToken, decoded };