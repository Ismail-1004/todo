import sequalize from "../db";
import { DataTypes } from "sequelize";

const User = sequalize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
})

const Task = sequalize.define("task", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
})

User.hasMany(Task)
Task.belongsTo(User)

export default { User, Task }