import { mysqlPool } from "../config/taskdb.js";


export const updateTask = async (req, res) => {
    taskId = req.params.id;
  
    const { taskName, description, dueDate, priority } = req.body;
  
    try {
      connection = await mysqlPool.getConnection();
  
      const [result] = await connection.query(
        "UPDATE tasks SET taskName = ?, description = ?, dueDate = ?, priority = ? WHERE id = ?",
        [taskName, description, dueDate, priority]
      );
  
      connection.release();
      if (result.affectedRow === 0) {
        return res.status(404).json({ error: "Task not found!" });
      }
      return res.send(200).json({ message: "task update successfully" });
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }