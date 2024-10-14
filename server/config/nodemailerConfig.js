const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendMail(to, subject, message) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: message,
  });
}

module.exports = { sendMail };
