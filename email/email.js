var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jayaprasad.jp.m@gmail.com',
    pass: 'hzohddrgimjjbqlz'
  }
});






var express = require('express')
var app = express()

app.get('/email', function (req, res) {
  
  var email = req.query.email;
  var subject=req.query.subject;
  var message = req.query.message;
 
  console.log(email);
  var mailOptions = {
    from: 'jayaprasad.jp.m@gmail.com',
    to: email,
    subject: subject,
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('Simple Example of routes!');
})




app.listen(3001, function () {
  console.log('Server is listening at 3000')
})