const { Client } = require('pg');

const client = new Client({
    user: 'test_user',
    host: 'localhost',
    database: '2024_gxp_test_db',
    password: 'test_password',
    port: 5432, // デフォルトのポート番号
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

client.query('SELECT * FROM employees', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.rows);
});

client.end()
.then(() => console.log('Disconnected from PostgreSQL database'))