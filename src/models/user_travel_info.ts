import { DataTypes } from 'sequelize'
import { sequelize } from '../database'

export const UserTravelInfo = sequelize.define(
	'users_travel_info',
	{
		user_email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		purpose: DataTypes.STRING,
		visitedBefore: DataTypes.BOOLEAN,
		visitTime: DataTypes.STRING,
		enterFrom: DataTypes.STRING,
		exitFrom: DataTypes.STRING,
		message: DataTypes.STRING
	},
	{ freezeTableName: true, timestamps: true }
)
