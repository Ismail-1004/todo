import { Router } from "express"
import TodoController from "../controllers/TodoController"

const router = Router()

router.get("/", TodoController.getAll)
router.get("/:id", TodoController.getOne)
router.post("/", TodoController.createTask)
router.patch('/', TodoController.updateTask)
router.delete("/", TodoController.deleteTask)

export default router