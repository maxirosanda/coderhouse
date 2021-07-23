const { urlencoded, json } = require('express');
const app = require('express')();
let config = require('./config/config');

app.use(urlencoded({extended: true}));
app.use(json());


console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send(`Servidor express en modo ${config.NODE_ENV}`);
})

app.listen(config.PORT, () => {
    console.log(`Aplicacion correindo en http://${config.HOST}:${config.PORT}`);
})