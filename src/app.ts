import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";


/** 1-ENTRANCE **/
const app =express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); //Publicga ochadi
app.use(express.urlencoded({extended: true})); //HTML <form> dan kelgan ma'lumotlarni o'qish uchun. Traditional API ni support qiladi.
app.use(express.json());   //Rest API ni support qiladi
app.use(morgan(MORGAN_FORMAT)); //Logging standartni quradi
/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set('views',path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);   //  EJS
app.use("/", router);             // REACT

export default app;
