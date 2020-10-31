var mysql = require('mysql');
const { useCallback } = require('react');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL')
    }
});

//retrieve data from mysql database
module.exports = {
    // getAllMovies: (callback) => {
    //     connection.query('SELECT * FROM movies', (err, data) => {
    //         if (err) {
    //             console.log(err)
    //             callback(err);
    //         } else {
    //             callback(null, data)
    //         }
    //     })
    // }
}


