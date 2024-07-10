import { Request, Response, NextFunction } from "express"
import models from "../models/models"

class TodoController {
    async getAll (req: Request, res: Response) {
        try {
            const tasks = await models.Task.findAll()

            return res.status(200).json(tasks)
        } catch (e: any) {
            res.status(500).json({ message: e.message })
        }
    }

    async getOne (req: Request, res: Response) {
        try {
            const { id } = req.params

            const task = await models.Task.findOne({ where: { id } })

            if (!task) {
                res.status(404).json({ message: "Задача не найдена" })
            }

            res.status(200).json(task)    
        } catch (e: any) {
            res.status(500).json({ message: e.message })
        }
    }

    async createTask (req: Request, res: Response) {
        try {
            const { title, description } = req.body

            const task = await models.Task.create({
                title,
                description
            })

            return res.status(200).json({ message: "Задача успешно создана", task })
        } catch (e: any) {
            res.status(500).json({ message: e.message })
        }
    }

    async updateTask (req: Request, res: Response) {
        try {

        } catch (e) {}
    }

    async deleteTask (req: Request, res: Response) {
        try {

        } catch (e) {}
    }
    
}

export default new TodoController()