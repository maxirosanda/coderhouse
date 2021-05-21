const pahtPublic = "../../../public/";
const path = require("path");
const jwt = require("../jwt/jwt");

let usuarios = [];

module.exports = {


    showLogin: (req, res) => {
        res.sendFile(path.join(__dirname + pahtPublic + "login.html"));
    },

    showRegister: (req, res) => {
        res.sendFile(path.join(__dirname + pahtPublic + "register.html"));
    },

    login: (req, res) => {
        let {nombre, password} = req.body;
        let user = usuarios.find( el => el.nombre === nombre);
        if(user) {
            if( user.password === password) {
                user.contador = 0;
                const token = jwt.generateToken(nombre);
                res.header("x-auth-token", token).send({nombre: nombre});
            }
        } else {
            res.status(400).send("WRONG");
        }
    },

    register: (req, res) => {
        let user = usuarios.find( el => el.nombre === req.body.nombre);
        if(user) {
            res.status(400).send("WRONG");
        } else {
            let user = req.body;
            if(!user.contador) user.contador = 0;
            usuarios.push(req.body);
            const token = jwt.generateToken(user.nombre);
            res.header("x-auth-token", token).send({nombre: user.nombre});
        }
    },

    showDatos: (req, res) =>{
        let user = usuarios.find(el => el.nombre === req.user.nombre);
        if(user) {
            user.contador++;
            res.render('datos', {
                datos: user,
                contador: user.contador
            })
        } else {
            res.render('token-error', {})
        }
    }
};