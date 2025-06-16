'use client'

import { useRouter } from 'next/navigation'

import { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '../ui/button'

import axiosInstance from '@/lib/axios'

/* eslint-disable @typescript-eslint/no-explicit-any */

const LogoutButton = ({ token }: { token: string }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  async function onSubmit() {
    startTransition(async () => {
      try {
        const response = await axiosInstance.post('/v1/auth/logout', null, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const { code, msg } = response.data || {}

        if (code !== 200) {
          toast.error('Logout Failed', {
            description: msg ?? 'Invalid credentials',
            position: 'top-center'
          })
          return
        }

        localStorage.removeItem('access_token')

        toast.success('Success', {
          description: 'Logout Success!',
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

  return (
    <Button
      variant="destructive"
      onClick={onSubmit}
      className="cursor-pointer hover:opacity-90"
    >
      {isPending ? 'Loading...' : 'Logout'}
    </Button>
  )
}

export default LogoutButton
