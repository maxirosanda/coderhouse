const koa = require('koa');
const koaBody = require('koa-body');
const alumnosRotuers = require('./routes/alumnosRouter');
const app = new koa();


app.use(koaBody());
app.use(alumnosRotuers.routes());


app.listen(5000, () => console.log("Server running"))
    .on('error', e => console.log("error: ", e));