import express from "express";
import { mysqlPool }  from './src/config/taskdb.js'




export const createTask = async (req, res) => {
    const { taskName, description, dueDate, priority } = req.body;
  
    if (!(taskName && dueDate && priority && description)) {
      return res.status(400).json({
        error: "Incomplete data. Please provide taskName, dueDate, and priority.",
      });
    }
    try {
      const connection = await mysqlPool.getConnection();
      const [result] = await connection.execute(
        "INSERT INTO tasks (taskName, description, dueDate, priority) VALUES (?, ?, ?, ?)",
        [taskName, description, dueDate, priority]
      );
      connection.release();
  
      const newTaskId = result.insertId;
      res
        .status(201)
        .json({ taskId: newTaskId, message: "Task created successfully." });
    } catch (error) {
      console.error("Error creating task:, error");
      res.status(500).json({ error: "Internal Server Error" });
    }
  }