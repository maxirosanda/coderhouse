const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes/index');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// seteo de handlebars
app.engine('hbs', handlebars({extname: '.hbs', defaultLayout: 'index.hbs'}));
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(router);


app.listen(5000, () => { console.log("running")})
    .on('error', (e) => {console.log("error: ", e)})
