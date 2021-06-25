const nodemailer = require("nodemailer");

const asunto = process.argv[2];
const mensaje = process.argv[3];
const to = process.argv[4];
const attach = process.argv[5];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cosmesfulanitocoderhouse@gmail.com',
        pass: 'coderhouse',
    }
});

const mailOptions = {
    from: 'cosmesfulanitocoderhouse@gmail.com',
    to: to || 'cosmesfulanitocoderhouse@gmail.com',
    subject: asunto,
    html: mensaje,
    attachments: [{
        path: attach? attach : ''
    }]
};

console.log(mailOptions);

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log("error: ", err);
        return;
    }

    console.log(info);
})