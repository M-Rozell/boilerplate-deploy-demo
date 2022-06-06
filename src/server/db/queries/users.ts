import { Query } from '../pool';

interface UsersTable {
    id?: number;
    email?: string;
    _created?: Date;
}

const all = () => Query<[UsersTable[], {insertId: number}]>('CALL spGetChirps()');
const insert = (values: {email: string}) =>Query('INSERT INTO chirps SET ?', values);

export default {
    all, 
    insert
}
