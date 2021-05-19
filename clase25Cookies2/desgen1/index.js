const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./src/routes/sessionRoutes");

// FILESTORE
//const fileStore = require("session-file-store")(session);

// MONGO
//const MongoStore = require('connect-mongo');
//const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true};

// REDIS
const redis = require("redis");
const client = redis.createClient();
const redisStore = require("connect-redis")(session);

app.use(cookieParser());

//mongodb+srv://hernan:<password>@cluster0.sjlll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(session({
    //store: new fileStore({path: './sessions', ttl: 10, retries: 0}),
    //store: MongoStore.create({
    //    mongoUrl: 'mongodb+srv://hernan:root@cluster0.sjlll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    //    mongoOptions: advancedOptions,
    //    ttl: 60,
    //    collectionName: 'sessions'
    //  }),

    store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 60 //opcional
    }),
    secret: "unasecret",
    resave: false,
    saveUninitialized: false
}))

app.use(router)

app.listen(5000, () => { console.log("running")});