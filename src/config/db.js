import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config();

import { MYSQL_HOST, MYSQL_DB, MYSQL_PASSWORD, MYSQL_USER } from "./env";

export const db = mysql.createConnection({
    connectionLimit:10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});


