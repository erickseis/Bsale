//import of data base
const mysql = require('mysql');


//define conecction of data base
const connection = mysql.createPool({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    database: 'bsale_test',
    user: 'bsale_test',
    password: 'bsale_test',
});


//export of connection
module.exports = connection;
