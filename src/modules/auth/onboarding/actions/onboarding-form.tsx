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
      gender: undefined,
      prevention: undefined,
      gamble_frequency: undefined,
      mood: undefined,
      gamble_loss: '',
      notes: ''
    }
  })

  async function onSubmit(values: z.infer<typeof onBoardingSchema>) {
    startTransition(async () => {
      try {
        const response = await axiosInstance.post(
          '/v1/profiles',
          {
            gender: values.gender,
            prevention: values.prevention,
            gamble_frequency: values.gamble_frequency,
            mood: values.mood,
            gamble_loss: values.gamble_loss,
            notes: values.notes
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX3V1aWQiOiIwMWFlZmVkMy02YTQ1LTRkYjktYWZlYy01ZTY0OWU5MGIwZGIiLCJleHAiOjE3NTAwMDQ2OTIsInN1YiI6Ijc1MWZlMTE5LTM2M2MtNGZmNS1hZGUwLTA3ZDQzZDI4NjA1YiJ9.EV4S1LR5MijP-KLBaFQIXSZdnYfcmKvo2l0w-cmu8Hc`
            }
          }
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
