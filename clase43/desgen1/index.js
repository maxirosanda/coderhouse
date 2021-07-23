const config = require('./config/config');
const express = require('express');
const app = express();
const palabrasRouter = require('./src/routes/palabrasRouter');

if(config.NODE_ENV === 'dev'){
    const cors = require('cors');
    app.use(cors());
}

app.use(express.static('public'));
app.use(express.json());

app.use('/palabras', palabrasRouter);

app.listen(process.env.PORT, () => { console.log(`Server runngin on port: ${process.env.PORT}`)})
    .on('error', e => { console.log("Error: ", e)});    