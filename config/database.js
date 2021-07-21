var mysql = require('mysql');
var connMysql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'admin',
        password : 'fin4278homer1002',
        database : 'portal_noticias'
    });
}

module.exports = function(){
    return connMysql;
}