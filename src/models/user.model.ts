import { DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { UserEnrolledTours } from './user_enrolled_tours'
import { UserTravelInfo } from './user_travel_info'

export const User = sequelize.define(
	'users',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		phone: DataTypes.STRING,
		country: DataTypes.STRING
	},
	{ freezeTableName: true, timestamps: true }
)

User.hasOne(UserEnrolledTours, {
	foreignKey: 'user_email',
	sourceKey: 'email'
})
UserEnrolledTours.belongsTo(User, { foreignKey: 'user_email', targetKey: 'email' })

User.hasOne(UserTravelInfo, {
	foreignKey: 'user_email',
	sourceKey: 'email'
})
UserTravelInfo.belongsTo(User, {
	foreignKey: 'user_email',
	targetKey: 'email'
})
