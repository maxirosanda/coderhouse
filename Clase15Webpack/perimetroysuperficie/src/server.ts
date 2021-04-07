import express from 'express';
const app = express();
const PORT = 5000;

const PerimetroRouter = require('./routers/PerimetroRouters');
const SuperficieRouter = require('./routers/SuperficieRouter');

app.use(PerimetroRouter);
app.use(SuperficieRouter);


app.listen(PORT, () => {console.log(`running on port: ${PORT}`)});