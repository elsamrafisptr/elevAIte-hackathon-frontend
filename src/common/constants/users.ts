import { z } from 'zod'

import {
  GamblingFrequency,
  Gender,
  MoodStatus,
  PreventiveMeasureFrequency
} from './onboarding'

export type IUser = {
  id: string
  name: string
  email: string
}

export type User = {
  userId: string
}

export type GetUser = () => User | undefined

export const loginSchema = z.object({
  username: z.string().min(5).max(32),
  password: z.string().min(5).max(32)
})

export const registerSchema = z
  .object({
    username: z.string().min(3).max(48),
    email: z.string().min(5).email(),
    password: z.string().min(5).max(32),
    verify_password: z
      .string({
        required_error: 'Required'
      })
      .min(8, { message: 'min 8' })
  })
  .refine(
    values => {
      return values.password === values.verify_password
    },
    {
      message: 'Password confirmation is wrong!',
      path: ['verify_password']
    }
  )

export const onBoardingSchema = z
  .object({
    gender: z.nativeEnum(Gender).optional(),
    prevention: z.nativeEnum(PreventiveMeasureFrequency).optional(),
    gamble_frequency: z.nativeEnum(GamblingFrequency).optional(),
    mood: z.nativeEnum(MoodStatus).optional(),
    gamble_loss: z.string().min(5).max(500),
    notes: z.string().max(500).optional()
  })
  .strict()
