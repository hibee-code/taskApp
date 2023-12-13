import { mysqlPool } from "../config/taskdb.js";

export const getTaskId = async (req, res) => {
    const taskId = req.params.id;
  
    if (!taskId) {
      return res.send("wrong id.....");
    }
    try {
      const connection = mysqlPool.getConnection();
  
      const [result] = await connection.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
      );
  
      connection.release();
  
      if (result === 0) {
        return res.status(404).json({ error: "Task not found!" });
      }
      return res.status(200).json(result[0]);
    } catch (error) {
      console.error("Error retrieving task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }