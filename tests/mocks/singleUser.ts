import  bcrypt from 'bcryptjs';
import { User } from "../../src/types/User";
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

    
const password = bcrypt.hashSync('AnyPassWord', SALT_ROUNDS);

export const userFindOneReturnFromDB: User = {
        id: 1,
        username: 'Hagar',
        vocation: 'Guerreiro',
        level: 10,
        password
    }

    export const userRequestWrongUser: User = {
        id: 1,
        username: 'Wrong',
        vocation: 'Guerreiro',
        level: 10,
        password
    }