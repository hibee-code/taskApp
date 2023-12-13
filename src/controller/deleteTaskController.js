import { mysqlPool } from "../config/taskdb.js";


export const deleteTask =  async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const connection = await mysqlPool.getConnection();
  
      [result] = connection.query("DELETE FROM tasks WHERE id = ?", [id]);
      connection.release();
  
      if (result.affectedRow === 0) {
        return res.status(404).json({ error: "Task Not found!!" });
      }
  
      return res.send(200).json({ message: "Tasj Deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.send(500).json({ error: "internal Server Error" });
    }
  }