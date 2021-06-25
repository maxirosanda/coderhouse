const mail = require("./utils/mail");


cofirmarCompra: (req, res) => {
    // toda la magia que vas a hacer aca para finalizar la compra...
    
    mail.enviarmail(req.body.info);


    return "todos felices";
}