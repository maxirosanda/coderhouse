const express = require('express')
const exphbs  = require('express-handlebars');
const router = require("./src/routers/routerLogin");

const app = express()

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout:'main.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(router);

const server = app.listen(5000, () => {
    console.log(`running`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
