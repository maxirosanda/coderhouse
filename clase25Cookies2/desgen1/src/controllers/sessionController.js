

module.exports = {
    root: (req, res) => {
        let nombre = req.query.nombre || "";
        if(!req.session.contador) {
            req.session.contador = 1;
            res.status(200).send(`Bienvenido ${nombre}`);
        } else {
            console.log(req.cookies);
            req.session.contador++;
            res.status(200).send(`${nombre} ha visitida la pagina ${req.session.contador} veces`)
        }
    },

    olvidar: (req, res) => {
        let nombre = req.query.nombre || "";
        req.session.destroy( err => {
            if(err) res.status(400).json({error: err});
            else res.status(200).send(`hasta luego ${nombre}`);
        })
    }
}