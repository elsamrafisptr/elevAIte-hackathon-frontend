'use client'

import { z } from 'zod'

const registerSchema = z.object({
  username: z.string().min(2).max(50)
})

const loginSchema = z.object({
  username: z.string().min(2).max(50)
})

const forgotPasswordSchema = z.object({
  username: z.string().min(2).max(50)
})

export { registerSchema, loginSchema, forgotPasswordSchema }
