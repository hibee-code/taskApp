import express from "express"
import session from "express-session"
import dotenv from "dotenv";
import router from "./src/route/authRoute.js"
import SESSION_SECRET from './src/config/env.js'
import { db, dbName } from "./src/config/db.js"


//console.log(ENV)





dotenv.config(); 


const app = express();
const port = process.env.PORT


app.use(express.json());
app.use(session({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use('/auth', router);



app.listen(port,() => {
    console.log(`server is running`)
});
db.connect();
dbName.connect();

