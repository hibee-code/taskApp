import express from "express"
import { authenticateUser } from "../middleware/index.js";
import { getAllTask } from "../controller/getAllTask.js";
const router = express.Router();

router.get("/getAllTask",authenticateUser, getAllTask);

export default  getAllTask;

