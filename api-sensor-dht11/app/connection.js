var mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'bandtec',
    database : 'acquatec'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});



module.exports = connection;