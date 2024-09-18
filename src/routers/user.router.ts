import { Router } from 'express'
import { create_user, tour_enroll } from '../controller/user.controller'

export const userRouter = Router()
userRouter.post('/user', create_user)
userRouter.post('/tour-enroll', tour_enroll)
