var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jayaprasad.jp.m@gmail.com',
    pass: 'hzohddrgimjjbqlz'
  }
});

var mailOptions = {
  from: 'jayaprasad.jp.m@gmail.com',
  to: 'justice_of_peace@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});