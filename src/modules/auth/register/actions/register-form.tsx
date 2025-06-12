'use client'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerSchema } from '@/common/constants/users'

import axiosInstance from '@/lib/axios'

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function useRegisterForm() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    startTransition(async () => {
      try {
        const response = await axiosInstance.post(
          '/v1/auth/register',
          {
            username: values.username,
            email: values.email,
            password: values.password
          },
          { withCredentials: true }
        )

        const { code, msg } = response.data || {}

        if (code !== 200) {
          toast.error('Register Failed', {
            description: msg ?? 'Invalid credentials',
            position: 'top-center'
          })
          return
        }

        toast.success('Success', {
          description: 'You are registered!',
          position: 'top-center'
        })

        router.push('/login')
      } catch (error: any) {
        toast.error('Login Error', {
          description: error?.response?.data?.msg ?? 'An unexpected error occurred.',
          position: 'top-center'
        })
      }
    })
  }

  return { form, isPending, onSubmit }
}
