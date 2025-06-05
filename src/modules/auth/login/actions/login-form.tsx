'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { loginSchema } from '@/common/constants/users'

import axiosInstance from '@/lib/axios'

export default function useLoginForm() {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const response = await axiosInstance.post('/v1/auth/login', {
        email: values.email,
        password: values.password,
        redirect: false
      })

      if (response?.status !== 200) {
        let error = ''
        switch (response?.data?.message) {
          case 'CredentialsSignin':
            error = 'Invalid credentials!'
            break
          default:
            error = 'Something went wrong!'
        }
        toast('Error', { description: error })
        return
      }

      toast('Success', { description: 'You are now logged in!' })
      window.location.href = '/'
    })
  }

  return { form, isPending, onSubmit }
}
