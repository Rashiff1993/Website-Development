var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/home',function(req,res)
{
    res.send('<h1>Welcome' + req.query['userName'] +'</h1><br><h2>Mail Id: '+ req.query['mailId']+ '</h2>');
});
app.listen(3000);