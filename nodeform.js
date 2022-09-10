var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req,res)
{ 
  if(req.url =='/')  
  { 
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<form action="biodata" method="post" enctype="multipart/form-data">');
    res.write('<h1>Server side form creation and submission</h1>');
    res.write('Name <input type="text" name="username"><br><br>');
    res.write('Email <input type="email" name="mailid"><br><br>');
    res.write('Phone Number <input type="number" name="pno"><br><br>');
    res.write('Upload Resume <input type="file" name="uploadfile"><br><br>');
    res.write('<input type="submit"><br><br><br>');
    res.end('Kindly fillup the form');
  }
  else if(req.url=='/biodata')
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function(error,fields, files)
    {
      res.write('<h1>Form Details</h1><br>');
      res.write('<h1>Name: ' + fields.username + '</h1><br>');
      res.write('<h1>Email: ' + fields.mailid + '</h1><br>');
      res.write('<h1>Phone Number: ' + fields.pno + '</h1><br>');
    });
  }
  else
  {
    res.end('<h1>404 Page Not Found!!!!</h1>');
  }
}).listen(8080);