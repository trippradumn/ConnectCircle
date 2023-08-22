const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "fe0db04e584b66",
      pass: "5216b98e129790"
    }
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};