import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = (password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

export const checkThepassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}