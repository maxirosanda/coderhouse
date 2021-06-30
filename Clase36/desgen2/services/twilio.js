const twilio = require("twilio");
const accountSid = 'AC31d9233f4cb713b143c8a7b7cb077e4d';
const authToken = 'a3388def9238fb47c5f43a6e73c8c929';

const client = require('twilio')(accountSid, authToken);

const enviarWapp = async ({numero, mensaje, archivo }) => {
    let options = {
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`,
    }
    archivo? options.mediaUrl = [archivo] : null;

    return await client.messages.create(options);
}

const enviarMensajeDeTexto = async ({numero, mensaje }) => {
    let options = {
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`,
    }
    return await client.messages.create(options);
}

module.exports = {
    enviarWapp,
    enviarMensajeDeTexto
}