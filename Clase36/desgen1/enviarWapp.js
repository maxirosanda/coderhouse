const accountSid = 'AC31d9233f4cb713b143c8a7b7cb077e4d';
const authToken = 'a3388def9238fb47c5f43a6e73c8c929';

const client = require("twilio")(accountSid, authToken);

const numero = process.argv[2];
const mensaje = process.argv[3];

client.messages.create({
    body: mensaje,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${numero}`
}).then( messages => console.log(messages))
.catch(err => console.log("error: ", err))