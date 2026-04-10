import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'personalFinanceTrackerDB',
    password: 'Duban@Nexus6P7430@',
    port: 5432,
});