const app = require("express")();
const lamejorliberira = require("coderhouse-test-operaciones");


app.get("/", (req, res) => {
    res.status(200).send("Hola Libreria propia");
});

app.get("/suma", (req, res) => {
    let {num1, num2} = req.query;
    let resultado = lamejorliberira.suma(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es: ${resultado}</h1>`);
});

app.get("/resta", (req, res) => {
    let {num1, num2} = req.query;
    let resultado = lamejorliberira.resta(num1, num2);
    res.status(200).send(`<h1>La resta de ${num1} y ${num2} es: ${resultado}</h1>`);
});

app.get("/mult", (req, res) => {
    let {num1, num2} = req.query;
    let resultado = lamejorliberira.mult(num1, num2);
    res.status(200).send(`<h1>La multiplicacion de ${num1} y ${num2} es: ${resultado}</h1>`);
});

app.get("/div", (req, res) => {
    let {num1, num2} = req.query;
    let resultado = lamejorliberira.div(num1, num2);
    res.status(200).send(`<h1>La division de ${num1} y ${num2} es: ${resultado}</h1>`);
});


app.listen(5000, () => {console.log("Running")});