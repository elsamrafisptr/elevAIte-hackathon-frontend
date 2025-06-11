'use client'

import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'

import useRegisterForm from './actions/register-form'

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
  const { form, isPending, onSubmit } = useRegisterForm()
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-blue-200 to-blue-50 px-5">
      <Button variant="outline" className="absolute top-5 left-5">
        <ArrowLeft />
        <Link href="/" className="">
          Kembali ke Beranda
        </Link>
      </Button>
      <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-xl bg-white p-8 shadow-md md:w-max md:min-w-[30rem] dark:bg-slate-950">
        <h1 className="max-w-80 py-6 text-center text-lg font-semibold">
          Selamat Datang Kembali Bersama Kami, Anti Judi Online No.1 di Indonesia
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: email@example.com"
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Konfirmasi kata sandi anda"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Loading...' : 'Daftarkan Akun'}
            </Button>
          </form>
        </Form>
        <span className="flex items-center gap-0.5">
          <p>Sudah punya akun?</p>
          <Link href="/login" className="underline underline-offset-4">
            Masuk
          </Link>
        </span>
      </div>
    </section>
  )
}

export default Login
