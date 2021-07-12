const express = require('express');
const app = express();
app.use(express.json());

let numeros = [];

app.post('/ingreso', (req, res) => {
    let {numero} = req.body;
    numeros.push(numero);
    res.send(`Numero ${numero} almacenado`);
});


app.get('/egreso', (req, res) => {
    res.json({numeros});
})


app.listen(5000, () => {console.log("running")});