require('dotenv').config({ path: '../.env' });
const { Pool } = require('pg');

const dev = new Pool({
    host: 'evening-soiree.sequindb.com',
    user: process.env.PG_DEV_USER,
    database: process.env.PG_DEV_BASE,
    password: process.env.PG_DEV_PASSWORD,
    port: 5432
});

const prod = new Pool({
    host: 'evening-soiree.sequindb.com',
    user: process.env.PG_PROD_USER,
    database: process.env.PG_PROD_BASE,
    password: process.env.PG_PROD_PASSWORD,
    port: 5432
});

const db = process.env.NODE_ENV === 'production' ? prod : dev;

module.exports = db;