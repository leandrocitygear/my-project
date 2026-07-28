import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'personalFinanceTrackerDB',
    password: process.env.DATABASE_URL,
    port: 5432,
});

export default pool;