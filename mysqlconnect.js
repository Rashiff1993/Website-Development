var mysql = require('mysql');
var con = mysql.createConnection(
{
  host:"localhost",
  user:"root",
  password:"password",
  database:"PROJECTS"
});

con.connect(function(err)
{
    if(err) throw err;
    console.log('Mysql Connected');

    con.query("create table Students (student_id int,student_name varchar(200),student_city varchar(200))",
    function(err,result)
  {
    if (err) throw err;
    console.log('Table Created');
  });

});

