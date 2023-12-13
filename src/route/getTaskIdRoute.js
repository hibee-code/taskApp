import express from "express";
import { getTaskId } from "../controller/getTaskIdcontroller.js";
import { authenticateUser } from "../middleware/index.js";

const router = express.Router();

router.get("/tasks/:id",authenticateUser, getTaskId);

export default router;
