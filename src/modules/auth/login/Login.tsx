'use client'

import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'

import useLoginForm from './actions/login-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const Login = () => {
  const { form, isPending, onSubmit } = useLoginForm()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-blue-200 to-blue-50 px-5">
      <Button variant="outline" className="absolute top-5 left-5">
        <ArrowLeft />
        <Link href="/" className="">
          Kembali ke Beranda
        </Link>
      </Button>
      <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-xl bg-white p-8 shadow-md md:w-max md:min-w-[30rem] dark:bg-slate-950">
        <h1 className="max-w-80 py-6 text-center text-lg font-semibold">
          Selamat Datang Pada Website Anti Judi Online No.1 di Indonesia
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: tungtungtungsahur123"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukkan kata sandi anda"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Loading...' : 'Masuk Website'}
            </Button>
          </form>
        </Form>
        <span className="flex items-center gap-0.5">
          <p>Belum punya akun?</p>
          <Link href="/register" className="underline underline-offset-4">
            Daftar Sekarang
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Login
