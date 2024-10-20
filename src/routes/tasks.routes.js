import { Router } from "express";
import { getTasks, createTask } from "../controllers/tasks.controller.js";
const router = Router();
export default router;

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id");
router.delete("/tasks/:id");
router.get("/tasks/:id");
