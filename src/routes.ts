import { Router, Request, Response } from "express";
import TodoController from "./controllers/TodoController";

const router = Router();

router.get("/todos", TodoController.index);
router.get("/todo/:id", TodoController.findById);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.delete);
router.post("/todo", TodoController.create);

export default router;
