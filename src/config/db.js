import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

export const db = mysql.createConnection({
    //connectionLimit:10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    //database: process.env.DB_DATABASE

});

db.connect(function(err) {
    if (err) throw err;
    console.log("DB connected.......")
});

//Create a databaseName

export const dbName = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,


});

//create a new database

// dbName.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     dbName.query("CREATE DATABASE taskapp", function (err) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
