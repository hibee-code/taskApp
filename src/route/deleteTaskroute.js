import express from "express";
import { deleteTask } from "../controller/deleteTaskController.js";
import { authenticateUser } from "../middleware/index.js";

const router = express.Router();



router.delete("/tasks/:id",authenticateUser, deleteTask);

export default deleteRouter;
