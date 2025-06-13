'use client'

import Link from 'next/link'

import useOnBoardingForm from './actions/onboarding-form'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'

const onBoardingFormData = {
  question_1: [
    {
      value: 'male',
      title: 'Laki-Laki',
      description: 'Dapatkan notifikasi untuk semua pesan baru'
    },
    {
      value: 'female',
      title: 'Perempuan',
      description: 'Hanya pesan langsung dan mention'
    }
  ],
  question_2: [
    {
      value: 'all',
      title: 'Semua Pesan',
      description: 'Dapatkan notifikasi untuk semua pesan baru'
    },
    {
      value: 'mentions',
      title: 'Pesan Penting',
      description: 'Hanya pesan langsung dan mention'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    }
  ],
  question_3: [
    {
      value: 'all',
      title: 'Semua Pesan',
      description: 'Dapatkan notifikasi untuk semua pesan baru'
    },
    {
      value: 'mentions',
      title: 'Pesan Penting',
      description: 'Hanya pesan langsung dan mention'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    }
  ],
  question_4: [
    {
      value: 'all',
      title: 'Semua Pesan',
      description: 'Dapatkan notifikasi untuk semua pesan baru'
    },
    {
      value: 'mentions',
      title: 'Pesan Penting',
      description: 'Hanya pesan langsung dan mention'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    },
    {
      value: 'none',
      title: 'Mode Tenang',
      description: 'Tidak ada notifikasi'
    }
  ]
}

const OnBoarding = () => {
  const { form, isPending, onSubmit } = useOnBoardingForm()
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-t from-blue-200 to-blue-50 p-5">
      <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-xl bg-white p-8 shadow-md md:w-max md:min-w-[30rem] dark:bg-slate-950">
        <h1 className="max-w-80 py-6 text-center text-lg font-semibold">
          Selamat Datang Pada Website Anti Judi Online No.1 di Indonesia
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Pilih jenis gender kamu</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-4 gap-4">
                      {onBoardingFormData.question_1.map((item, index) => {
                        const isSelected = field.value === item.value
                        return (
                          <Card
                            key={index}
                            className={cn(
                              'aspect-square cursor-pointer p-2 transition-all',
                              isSelected
                                ? 'shadow-lg ring-2 ring-blue-500 ring-offset-2'
                                : ''
                            )}
                            onClick={() => field.onChange(item.value)}
                          >
                            <CardContent className="flex h-full w-full flex-col items-center justify-end p-0">
                              <h1 className="text-xs font-medium">{item.title}</h1>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="early_prevention"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Apa langkah pencegahan yang sudah kamu lakukan?</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-4 gap-4">
                      {onBoardingFormData.question_2.map((item, index) => {
                        const isSelected = field.value === item.value
                        return (
                          <Card
                            key={index}
                            className={cn(
                              'aspect-square cursor-pointer p-2 transition-all',
                              isSelected
                                ? 'shadow-lg ring-2 ring-blue-500 ring-offset-2'
                                : ''
                            )}
                            onClick={() => field.onChange(item.value)}
                          >
                            <CardContent className="flex h-full w-full flex-col items-center justify-end p-0">
                              <h1 className="text-xs font-medium">{item.title}</h1>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gamble_frequency"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Intensitas frekuensi judi (Seberapa sering?)</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-4 gap-4">
                      {onBoardingFormData.question_3.map((item, index) => {
                        const isSelected = field.value === item.value
                        return (
                          <Card
                            key={index}
                            className={cn(
                              'aspect-square cursor-pointer p-2 transition-all',
                              isSelected
                                ? 'shadow-lg ring-2 ring-blue-500 ring-offset-2'
                                : ''
                            )}
                            onClick={() => field.onChange(item.value)}
                          >
                            <CardContent className="flex h-full w-full flex-col items-center justify-end p-0">
                              <h1 className="text-xs font-medium">{item.title}</h1>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="current_condition"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Bagaimana perasaan atau keadaan sekarang?</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-4 gap-4">
                      {onBoardingFormData.question_4.map((item, index) => {
                        const isSelected = field.value === item.value
                        return (
                          <Card
                            key={index}
                            className={cn(
                              'aspect-square cursor-pointer p-2 transition-all',
                              isSelected
                                ? 'shadow-lg ring-2 ring-blue-500 ring-offset-2'
                                : ''
                            )}
                            onClick={() => field.onChange(item.value)}
                          >
                            <CardContent className="flex h-full w-full flex-col items-center justify-end p-0">
                              <h1 className="text-xs font-medium">{item.title}</h1>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="current_loss"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Apa saja kerugian yang kamu alami?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tuliskan jawaban anda....."
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
              name="notes"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Catatan Tambahan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tuliskan jawaban anda....."
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full hover:cursor-pointer"
              disabled={isPending}
            >
              {isPending ? 'Loading...' : 'Kirim Data Pelengkap'}
            </Button>
          </form>
        </Form>
        <span className="flex items-center gap-0.5">
          <p>Belum siap isi data lengkap?</p>
          <Link href="/" className="underline underline-offset-4">
            Menuju Beranda
          </Link>
        </span>
      </div>
    </div>
  )
}

export default OnBoarding
