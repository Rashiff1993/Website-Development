var mysql = require('mysql');
var con = mysql.createConnection(
    { 
        host:"localhost",
        user:"root",
        password:"password",
        database:"newdb"
    }
);

con.connect(function(err)
{
    if (err) throw err;
    console.log('Connected to Mysql');
    var sql = "delete from students where students_id > 5";
    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log(result);
    });
});