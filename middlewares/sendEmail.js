const nodemailer = require('nodemailer');
const {secret} = require("../config/config")

exports.sendEmail = async (_bodyData = {}) => {

  // need to open in outlook new accout
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
    // auth: פרטים של המייל שלכם 
    auth: {
      user: secret.EmailFrom,
      pass: secret.EmailPass
    }
  });
// ${secret.userDb}
  let mailOptions = {
    from:secret.EmailFrom,
    replyTo : _bodyData.email,
    to: secret.EmailTo,
    subject: _bodyData.subject,
    text: `
          
            name: ${_bodyData.name}\n
           email:  ${_bodyData.email}\n
           message: ${_bodyData.msg || ""}\n
           
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("err", error);
      return false;
    } else {
      console.log('Email sent: ' + info.response);
      return true
    }
  });
}

// const sendEmailPay = (_data = "") => {

//   // need to open in outlook new accout
//     let transporter = nodemailer.createTransport({
//       host: "smtp-mail.outlook.com", // hostname
//       secureConnection: false, // TLS requires secureConnection to be false
//       port: 587, // port for secure SMTP
//       tls: {
//          ciphers:'SSLv3'
//       },
//       // auth: פרטים של המייל שלכם
//       auth: {
//         user: 'koko.akof10@outlook.com',
//         pass: 'MONKEYS12'
//       }
//     });

//     let mailOptions = {
//       from: 'koko.akof10@outlook.com',
//       to: 'koko.akof10@gmail.com',
//       subject: 'New customer to shop 🎍🎋🎁🎁 9999',
//       text: `New Customer to shop ${_data}`
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log("err",error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//     }

// sendEmail()
