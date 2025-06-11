import { z } from 'zod'

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

export const registerSchema = z.object({
  name: z.string().min(3).max(48),
  email: z.string().min(5).email(),
  password: z.string().min(5).max(32)
})
