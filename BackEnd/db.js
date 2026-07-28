import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'personalFinanceTrackerDB',
    password: process.env.DATABASE_URL,
    port: 5432,
});

export default pool;