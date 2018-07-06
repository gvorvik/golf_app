const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'golf_app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', (req, res) => {
    console.log('postgresql connected');
})

pool.on('error', (error) => {
    console.log('Error with postgresql', error);
});

module.exports = pool;