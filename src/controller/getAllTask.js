import express from "express";
import { mysqlPool } from "../config/taskdb.js";

export const getAllTask = async (req, res) => {
  try {
    const connection = mysqlPool.getConnection();

    const results = await connection.query("SELECT * FROM tasks");

    connection.release();
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
