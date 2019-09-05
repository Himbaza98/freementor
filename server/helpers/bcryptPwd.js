import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = (Password) => {
    const hash = bcrypt.hashSync(Password, saltRounds);
    return hash;
}

export const checkThePassword = (Password, hash) => {
    return bcrypt.compareSync(Password, hash);
}