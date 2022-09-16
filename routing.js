var express = require('express');
var router = express.Router(); //.Router()----- is a package 'imported' and assigned to  a var router.Router.

router.get('/',function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
});

router.get('/youtube',function(req,res)
{ 
    res.redirect('https://www.youtube.com/vjtechnowizard');
});

router.get('/instagram',function(req,res)
{ 
    res.redirect('https://www.instagram.com/vjtechnowizard');
});

router.get('/facebook',function(req,res)
{ 
    res.redirect('https://www.facebook.com');
});

module.exports = router;