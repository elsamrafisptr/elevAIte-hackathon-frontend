'use client'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { onBoardingSchema } from '@/common/constants/users'

import axiosInstance from '@/lib/axios'

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function useOnBoardingForm() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof onBoardingSchema>>({
    resolver: zodResolver(onBoardingSchema),
    defaultValues: {
      gender: '',
      early_prevention: '',
      gamble_frequency: '',
      current_condition: '',
      current_loss: '',
      notes: ''
    }
  })

  async function onSubmit(values: z.infer<typeof onBoardingSchema>) {
    startTransition(async () => {
      try {
        const response = await axiosInstance.post(
          '/v1/auth/login',
          {
            username: values.current_condition,
            password: values.current_condition
          },
          { withCredentials: true }
        )

        const { code, msg } = response.data || {}

        if (code !== 200) {
          toast.error('Login Failed', {
            description: msg ?? 'Invalid credentials',
            position: 'top-center'
          })
          return
        }

        toast.success('Success', {
          description: 'You are now logged in!',
          position: 'top-center'
        })

        router.push('/app')
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
