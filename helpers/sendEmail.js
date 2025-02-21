const nodemailerv = require("nodemailer");
require("dotenv").config();

const { MY_EMAIL, MY_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp-mail.outlook.com",
    port: 465,
    secure: true,
    auth: {
        user: MY_EMAIL,
        pass: MY_PASSWORD,
    }
};

const transport = nodemailerv.createTransport(nodemailerConfig);

const sendEmail= async (data) => {
    const email = { ...data, from: MY_EMAIL };
    await transport
      .sendMail(email)
      .then(() => console.log("Email send success"))
      .catch((error) => console.log(error.message));
    return true;
}

module.exports = sendEmail;