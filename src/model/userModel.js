import { db } from "../config/db";

 function createUser(username, email, password){
  new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}

function findUserByEmail(email) {
  new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
}
  module.exports = { createUser, findUserByEmail}
  export const { createUser, findUserByEmail } = userModel;