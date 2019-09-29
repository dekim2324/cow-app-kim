var mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'cows'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected server to SQL DB!')
});

module.exports = connection;