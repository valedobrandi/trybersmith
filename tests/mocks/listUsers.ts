import { User, Users } from "../../src/types/User";


export const usersFindAllReturnFromDB: User[] = [
    {
        id: 1,
        username: 'Hagar',
        vocation: 'Guerreiro',
        level: 10,
        password: 'AnyPassWord',
    },
    {
        id: 2,
        username: 'Eddie',
        vocation: 'Guerreiro',
        level: 8,
        password: 'AnyPassWord'
    },
    {
        id: 3,
        username: 'Helga',
        vocation: 'Curandeira',
        level: 9,
        password: 'AnyPassWord',
    },
]

export const usersListReturn: Users[] = [
    {
        username: 'Hagar',
        productIds: [1, 2, 6],
    },
    {
        username: 'Eddie',
        productIds: [3, 4],
    },
    {
        username: 'Helga',
        productIds: [5],
    }
]