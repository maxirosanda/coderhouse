const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');


// app.use(express.static('public'));


PORT = parseInt(process.argv[2]) || 8081;
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout:'main.hbs'}));
app.set('view engine', '.hbs');

let info = `<H1>Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} -
<b>PID: ${process.pid}</b> - ${new Date().toLocaleString()}</H1>`;


app.get("/datos", (req, res) => {
    console.log(`port: ${PORT} -> fyh: ${Date.now()}`);
    res.status(200).send(`<H1>Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} -
                          <b>PID: ${process.pid}</b> - ${new Date().toLocaleString()}</H1>`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.get("/asd", (req, res) => {
    res.render('/public/index.html', {info: info});
})

app.listen(PORT, () => {console.log(`Running on port ${PORT}`)});