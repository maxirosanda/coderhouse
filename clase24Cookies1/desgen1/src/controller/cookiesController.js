
module.exports = {
    setCookie: (req, res) => {
        let {nombre, valor} = req.query;
        let tiempo = parseInt(req.query.tiempo) || false;
        console.log(req.query);
        if(nombre, valor) {
            if(tiempo) {
                res.cookie(nombre, valor, {maxAge: tiempo}).send(`cookies seteadas por ${tiempo} segundos`);
            } else {
                res.cookie(nombre, valor).send("cookies seteadas");               
            }
        } else {
            res.status(400).send("faltan valores a enviar");
        }
    },

    clearCookie: (req, res) => {
        res.clearCookie(req.query.nombre).send("cookie cleared");
    },

    getCookie: (req, res) => {
        console.log(req.cookies);
        let nombre = req.query.nombre;
        let cookie = req.cookies[nombre];
        res.status(200).json({[nombre] : cookie})
    }
}