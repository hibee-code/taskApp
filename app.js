import express from "express";
import session from "express-session";
import { router } from "./src/route/authRoute.js"
import { SESSION_SECRET } from "./src/config/env.js"



import dotenv from "dotenv";
dotenv.config(); 


const app = express();
const port = process.env.PORT


app.use(express.json());
app.use(session({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use('/auth', router);



app.listen(port,() =>{
    console.log(`server is running`)
})