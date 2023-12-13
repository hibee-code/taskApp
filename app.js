import express from "express"
import dotenv from "dotenv"
import { mysqlPool }  from './src/config/taskdb.js'
import { sessionMiddleware } from "./src/middleware/index.js";
import getAllTask from "./src/route/getAllTaskRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(sessionMiddleware);



app.use("/getAllTask", getAllTask)


try {
    await mysqlPool.query("SELECT 1");
    console.log('db connection succeeded.');
    app.listen(3000, () => console.log(`server started at ${port}`));
  } catch (err) {
    console.log('db connection failed..' + err);
  }
  

