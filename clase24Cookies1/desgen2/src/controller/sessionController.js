
module.exports = {
    root: (req, res) => {
        let nombre = req.query.nombre || "";
        if(req.session.contador) {
            req.session.contador += 1;
            res.status(200).send(`${nombre}: Usted ha visitado la pagina ${req.session.contador} veces`);
        } else {
            req.session.contador = 1;
            res.status(200).send(`${nombre} Te damos la bienvenida`);
        }
    },

    olvidar: (req, res) => {
        req.session.destroy( err => {
            if(err) return res.status(400).send({"error": err});

            res.status(200).send("Hasta luego!");
        })
    }
}