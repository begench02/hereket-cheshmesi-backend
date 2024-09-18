import { Request, Response } from 'express'
import { User } from '../models/user.model'
import { UserEnrolledTours } from '../models/user_enrolled_tours'
import { UserTravelInfo } from '../models/user_travel_info'

export const create_user = async (req: Request, res: Response) => {
	const { name, email, phone, country, ...travelInfo } = req.body
	const user = await User.findOne({ where: { email } })

	if (user) {
		await User.update({ name, phone, country }, { where: { email } })
		await UserTravelInfo.update(travelInfo, { where: { user_email: email } })
		res.status(204).json({ message: 'Successfully updated' })
	} else {
		try {
			await User.create({ name, email, phone, country })
			await UserTravelInfo.create({ ...travelInfo, user_email: email })
			res.status(200).json({ message: 'Ok!' })
		} catch (err) {
			console.error(err)
			res.status(501).json({ message: 'Error!' })
		}
	}
}

export const tour_enroll = async (req: Request, res: Response) => {
	const { name, email, tour_id } = req.body
	console.log(`Name: ${name}, email: ${email}`)
	if (!email || !name) {
		res.status(400).json('error')
	}
	const user = await User.findOne({ where: { email } })
	if (!user) {
		await User.create({ name, email })
	}
	await UserEnrolledTours.create({ user_email: email, tour_id })
	res.status(200).json({ message: 'ok!' })
}
