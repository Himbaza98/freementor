import jwt from 'jsonwebToken';
import dotenv from 'dotenv';
dotenv.config();


let validateToken = (req, res, next) => {
    let Token = req.headers['x-access-Token'] || req.headers['authorization'];
    if (!Token) {
        return res.status(401).send({
            status: 401,
            error: "Unauthorized access"
        })
    }
    if (Token.startsWith('Bearer ')) {

        Token = Token.slice(7, Token.length);
    }

    if (Token) {
        jwt.verify(Token, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                return res.send({
                    Error: 'Token Error',
                    message: err
                });

            } else {
                req.decode = decode;
                next();
            }
        });
    } else {
        return res.send({
            success: false,
            message: 'Auth Token is not supplied'
        });
    }
};


export default validateToken;