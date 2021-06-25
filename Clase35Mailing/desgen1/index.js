const nodemailer = require("nodemailer");

const asunto = process.argv[2];
const mensaje = process.argv[3];

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elroy.windler@ethereal.email',
        pass: 'FEbtB1RM8JwS4g63Pa',
    }
});

const mailOptions = {
    from: 'elroy.windler@ethereal.email',
    to: 'diazher59@gmail.com',
    subject: asunto,
    html: mensaje
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log("error: ", err);
        return;
    }

    console.log(info);
})