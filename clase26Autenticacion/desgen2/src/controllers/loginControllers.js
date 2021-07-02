const path = require("path");
const pathPublic = "../../../public/";
const logica = require("coderhouse-test-operaciones");;


module.exports = {

    suma: (req, res) => {
        let {num1, num2} = req.query;
        let resultado = logica.suma(num1, num2);
        res.status(200).send(`<h1>La resta de ${num1} y ${num2} es: ${resultado}</h1>`);
    },

    checkLogin: (req, res) => {
        if(req.isAuthenticated()) {
            res.redirect("/datos");
        } else {
            res.redirect("/login");
        }
    },
    checkLogin: (req, res) => {
        if(req.isAuthenticated()) {
            res.redirect("/datos");
        } else {
            res.redirect("/login");
        }
    },

    showDatos: (req, res) => {
        if(req.isAuthenticated()) {
            if(req.session.contador) {
                req.session.contador++;
            } else {
                req.session.contador = 1;
            }
        res.render("datos", {nombre: req.session.nombre, contador: req.session.contador})
        } else {
            res.redirect("/login");
        }
    },

    showLogin: (req, res) => {
        res.sendFile(path.join(__dirname + pathPublic + "login.html"));
    },

    login: (req, res) => {
        res.redirect("/datos");
    },

    showRegister: (req, res) => {
        res.sendFile(path.join(__dirname + pathPublic + "register.html"));
    },

    register: (req, res) => {
        res.redirect("/datos");
    },

    logout: (req, res) => {
        req.session.destroy( err => {
            if(err) return err;

            res.redirect("/");
        })
    }
}