const path = require("path");
const pathPublic = "../../../public/";

let usuarios = [];

module.exports = {

    checkLogin: (req, res) => {
        if(req.session.nombre) {
            res.redirect("/datos");
        } else {
            res.redirect("/login");
        }
    },

    showDatos: (req, res) => {
        res.render("datos", {nombre: req.session.nombre, contador: req.session.contador})
    },

    showLogin: (req, res) => {
        res.sendFile(path.join(__dirname + pathPublic + "login.html"));
    },

    login: (req, res) => {
        console.log(req.body);
        let {nombre, password} = req.body;
        let resultado = usuarios.find( el => el.nombre === nombre);
        if(resultado?.password === password){
            req.session.nombre = nombre;
            res.redirect("/datos");
        } else {
            res.sendFile(path.join(__dirname + pathPublic + "login-error.html"));
        }
    },

    showRegister: (req, res) => {
        res.sendFile(path.join(__dirname + pathPublic + "register.html"));
    },

    register: (req, res) => {
        console.log(req.body);
        let encontrar = usuarios.find( el => el.nombre === req.body.nombre);
        
        if(encontrar || !req.body.nombre || !req.body.password || !req.body.direccion) {
            res.sendFile(path.join(__dirname + pathPublic + "/register-error.html"));
        } else {
            usuarios.push(req.body);
            req.session.nombre = req.body.nombre;
            res.redirect("/datos");
        }

    },

    logout: (req, res) => {
        req.session.destroy( err => {
            if(err) return err;

            res.redirect("/");
        })
    }
}