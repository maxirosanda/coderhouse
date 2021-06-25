const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE_SMTP,
    auth: {
        user: process.env.MAIL_SMTP,
        pass: process.env.PASS_SMTP,
    }
});

const mailOptions = (info) => ({
    from: info.from,
    to: info.to || 'cosmesfulanitocoderhouse@gmail.com',
    subject: info.asunto,
    html: mensaje,
    attachments: [{
        path: attach? attach : ''
    }]
});

const enviarmail = (info) => {
    const options = mailOptions(info);
    transporter.sendMail(options, (err, response) => {
        if(err) {
            throw err;
        }

        return response;
    })
};


module.exports = {
    enviarmail
}