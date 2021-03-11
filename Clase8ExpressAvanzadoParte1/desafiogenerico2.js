const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/sumar/:num1/:num2', (req, res) => {

    let resultado = suma(req.params.num1, req.params.num2);
    res.status(200).send(resultado.toString());

    // con send solo se puede enviar como string, buffer u objeto,
    // por esa razon se pone el .toString()
    // link a la documentacion de express:
    // http://expressjs.com/en/api.html#res.send
})

app.get('/api/sumar', (req, res) => {
    let resultado = suma(parseInt(req.query.num1), parseInt(req.query.num2))
    res.status(200).send(resultado.toString());
})

app.post('/api', (req, res) => {
    res.status(200).send("ok " + req.method)
})

app.put('/api', (req, res) => {
    res.status(200).send("ok " + req.method)
})

app.delete('/api', (req, res) => {
    res.status(200).send("ok " + req.method)
})

// Los endpoints estan puestos en este orden porque asi estan los items en los ejercicios
// PERO!, deberian ir en orden, primero los /api y despues los /api/sumar

function suma (num1, num2){
    return ( parseInt(num1)  + parseInt(num2) ); 
}


app.listen( 8080, () => {console.log("server running")})
    .on( "error", e => console.log(e.message));
