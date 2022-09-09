var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport(
    { 
        service:'gmail',
        auth:{
            user:'md.rashiff@gmail.com',
            pass:'mciqtacaaxnsfwno'
        }
});

var composemail = {
    from: 'md.rashiff@gmail.com',
    to: 'md.rashiff@gmail.com', 
    subject: 'send mail using nodejs',
    html: '<h>This is the mail send through NODE JS.</h>'
};

sender.sendMail(composemail,function(error,info)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Mail send successfully' + info.response);
    }
});