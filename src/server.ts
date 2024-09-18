import 'dotenv/config'
import { Sequelize } from 'sequelize'
import { userRouter } from './routers/user.router'
import cors from 'cors'
import express from 'express'
import { sequelize } from './database'

export const app = express()
app.use(express.json({ limit: '10mb' }))
app.use(cors())

async function start_server() {
	const PORT = process.env.PORT

	try {
		await sequelize.authenticate()
		await sequelize.sync({ force: true })
		console.log('Connection has been established successfully')
	} catch (err) {
		console.error('Unable to connect to database: ', err)
	}

	app.use('/api/', userRouter)
	app.listen(PORT, () => {
		console.log(`Server is running on port: ${PORT}`)
	})
}

start_server()
