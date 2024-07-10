import "dotenv/config"
import express from "express"
import router from "./routes/index"
import sequalize from "./db"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api", router)

const start = async () => {
    try {
        await sequalize.authenticate()
        await sequalize.sync({ alter: true })  
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))      
    } catch (e) {
        throw e
    }
}

start()