import express from "express";
import { createTask } from "../controller/taskcreationControlle";
import { authenticateUser } from "../middleware";

const router = express.Router();

router.post("/api/createTask", authenticateUser, createTask);


export default router;