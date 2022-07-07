const nodemailer = require("nodemailer");

class MailController {
  static index = async (req, res) => {
    // Ici, nous allons utiliser un compte de test pour envoyer des emails.
    // Toutes les informations concernant votre compte sont dans le fichier .env
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Doe John" <john@doe.com>', // sender address
      to: "target@example.com", // list of receivers
      subject: "It's work", // Subject line
      text: "Hello world in plain text", // plain text body
      html: "<b>Hello world in html body</b>", // html body
    });

    res.status(200).json({
      status: "success",
      message: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  };
}

module.exports = MailController;
