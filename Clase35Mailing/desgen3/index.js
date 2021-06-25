const sId = 'AC31d9233f4cb713b143c8a7b7cb077e4d';
const authToken = 'b22e2c2ca36eaf571b5db40ed59cddde';


const client = require('twilio')(sId, authToken);

const numero = process.argv[2];
const text = process.argv[3];

client.messages.create({
    body: text,
    from: '+19893490907',
    to: numero
}).then( message => {
    console.log(message.accountSid);
}).catch( (err) => {
    console.log("error: ", err);
})