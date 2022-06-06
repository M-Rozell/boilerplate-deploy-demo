import * as dotenv from 'dotenv';

dotenv.config();

export default {
    db: {
        host: process.env.DB_Host,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    }
}