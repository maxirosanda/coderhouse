const config = require('./config/config');
const express = require('express');
const palabrasRouter = require('./router/palabrasRouter');

const app = express();

if(config.NODE_ENV == 'development') {
    const cors = require('cors');
    app.use(cors());
}

app.use(express.static('public'))
app.use(express.json())

app.use('/palabras', palabrasRouter);

const PORT = config.PORT || 8000
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV})`
))
server.on('error', error => console.log('Servidor express en error:', error) )