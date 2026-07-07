import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import { T } from "./libs/types/common";
import cookieParser from "cookie-parser";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

//TCP 2

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
})


/** 1-ENTRANCE **/

const app =express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); //Public folder (CSS) ni ga ochadi
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true})); //HTML <form> dan kelgan ma'lumotlarni o'qish uchun. Traditional API ni support qiladi.
app.use(express.json());   //Rest API ni support qiladi. /HTML <form> dan kelgan ma'lumotlarni o'qish uchun BODY REQUESTNI QABUL QILADI
app.use(morgan(MORGAN_FORMAT)); //Logging standartni quradi
app.use(cookieParser());

/** 2-SESSIONS **/

app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6, //6h
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

// EJS sahifalariga avtomatik uzatib turadi
app.use(function(req, res, next) {    
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;  //res.locals = browser local variable 
    next();
});


/** 3-VIEWS **/
app.set('views',path.join(__dirname, "views")); // VIEWGA MANZIL KURSAYILYAPDI
app.set("view engine", "ejs");



/** 4-ROUTERS **/
app.use("/admin", routerAdmin);   //  SSR
app.use("/", router);             // SPA

export default app;
