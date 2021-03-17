const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();


let json = [{
    nombre: "Hernan",
    apellido: "Diaz",
    edad: "32",
    email: "diazher59@gmail.com",
    telefono: "1122334455"
},{
    nombre: "Homero",
    apellido: "simpson",
    edad: "32",
    email: "diazher59@gmail.com",
    telefono: "1122334455"
}]

app.engine("hbs", handlebars({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render("main", {datitos: json, atr: true})
})

app.get('/recibe', (req, res) => {
    let info = req.body;
    res.render("main", {datitos: info, atr: true})
})

app.listen(8080, ()=> { console.log("running")})
    .on("error", (err)=>{console.log("error: ", err)})