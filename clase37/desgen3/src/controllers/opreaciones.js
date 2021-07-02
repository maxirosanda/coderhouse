const logica = require("../negocio/index");

module.exports = {
    sumar: (req, res) => {
        let {num1, num2} = req.query;
        res.status(200).send(`<h1>La suma de ${num1} y ${num2} es: ${logica.sumar(num1, num2)}</h1>`);
    },
    resta: (req, res) => {
        let {num1, num2} = req.query;
        res.status(200).send(`<h1>La resta de ${num1} y ${num2} es: ${logica.resta(num1, num2)}</h1>`);
    },
    mult: (req, res) => {
        let {num1, num2} = req.query;
        res.status(200).send(`<h1>La multiplicacion de ${num1} y ${num2} es: ${logica.mult(num1, num2)}</h1>`);
    },
    div: (req, res) => {
        let {num1, num2} = req.query;
        res.status(200).send(`<h1>La division de ${num1} y ${num2} es: ${logica.div(num1, num2)}</h1>`);
    },

    listar : (req, res) => {
        res.status(200).json(logica.listar());
    }
}