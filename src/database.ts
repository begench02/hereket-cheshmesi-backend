import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('hereket-cheshmesi', 'postgres', '1234', {
	host: 'localhost',
	dialect: 'postgres'
})
