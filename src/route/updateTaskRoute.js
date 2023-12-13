import express from "express";
import { updateTask } from "../controller/taskUpdateController";

const router = express.Router();


router.put("/tasks/:id", updateTask);

export default updateTask;
