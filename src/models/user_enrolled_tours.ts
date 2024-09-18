import { DataTypes } from 'sequelize'
import { sequelize } from '../database'

export const UserEnrolledTours = sequelize.define(
	'users_enrolled_tours',
	{
		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		tour_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		}
	},
	{ timestamps: true }
)
