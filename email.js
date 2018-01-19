var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abc@gmail.com',
    pass: 'abc'
  }
});

var mailOptions = {
  from: 'abc@gmail.com',
  to: 'abc@gmail.com',
  subject: 'Using node snippets',
  text: `
  Hi,
  Testing node snippet for email.
  `
};

transporter.sendMail(mailOptions, function (error, body) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + body.response);
  }
});