const path = require("path");
const pathPublic = "../../../public/";


module.exports = {

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