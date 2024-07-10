import { Router } from "express"
import TodoRouter from "./todoRouter"

const router = Router()

router.use("/todo", TodoRouter)

export default router