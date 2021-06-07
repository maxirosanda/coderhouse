const app = require("express")();
const {fork} = require("child_process");

let contador = 0;

sumar = () => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;     
    }
    return suma;
}

app.get("/", (req, res) => {
    contador++;
    res.status(200).send(`<h1>Un contador que va por el: ${contador.toString()}</h1>`);
});

app.get("/bloq", (req, res) => {
    res.status(200).send(sumar().toString());
});

app.get("/non_bloq", (req, res) => {
    const calculo = fork("./calculo.js");
    calculo.send('start');
    calculo.on('message', sum => {
        res.status(200).send(`<H1>La suma es: ${sum}</H1>`)
    })
})


app.listen(5000, () => {console.log("running")});

