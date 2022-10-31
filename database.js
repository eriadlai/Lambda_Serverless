const oMysql = require('mysql');
const oConexion = oMysql.createPool({
    host:'database-1.cwgkiltlnrjo.us-west-1.rds.amazonaws.com',
    user:'admin',
    port:"3306",
    password:'adlai1999',
    database:'lambda_db',
});
module.exports = oConexion;