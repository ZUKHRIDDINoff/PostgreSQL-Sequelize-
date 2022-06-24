import express from 'express'
import './config.js'
import UserRouter from './routes/user.js'
import TodoRouter from './routes/todos.js'

import database from './utils/db.js'
import mockData from './mock.js'

const PORT = process.env.PORT || 5000

!async function () {
    const app = express()

    const db = await database()
    await mockData({ sequelize: db })

    app.use(express.json())
    app.use((req, res, next) => {
        req.models = db.models
        next()
    })

    app.use(UserRouter)
    app.use(TodoRouter)

    app.listen(PORT, () => console.log('server ready at *' + PORT))
}()