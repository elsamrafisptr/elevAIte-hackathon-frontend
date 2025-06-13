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

import { cn } from '@/lib/utils'

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
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Label Question</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-4 gap-4">
                      {[{ value: '' }, { value: '' }, { value: '' }, { value: '' }].map(
                        (item, index) => {
                          const isSelected = field.value === item.value
                          return (
                            <Card
                              key={index}
                              className={cn(
                                'aspect-square cursor-pointer transition-all',
                                isSelected
                                  ? 'shadow-lg ring-2 ring-blue-500 ring-offset-2'
                                  : ''
                              )}
                            >
                              <CardContent className="space-y-4 p-6 text-center">
                                <>
                                  {isSelected && (
                                    <div className="flex items-center justify-center">
                                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                        <div className="h-2 w-2 rounded-full bg-white"></div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              </CardContent>
                            </Card>
                          )
                        }
                      )}
                    </div>
                    {/* <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col"
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">All new messages</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Direct messages and mentions
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup> */}
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
