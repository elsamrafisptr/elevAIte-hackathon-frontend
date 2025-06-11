'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { fetcher, useSWRAxios } from '@/lib/swr'

const Home = () => {
  const { data, error, isLoading } = useSWRAxios('/v1/health/', fetcher, {
    refreshInterval: 1000 * 60 * 60,
    revalidateOnFocus: true
  })

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-t from-blue-200 to-blue-50">
      {isLoading && <p>Checking server health…</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {data && (
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">{data.data.heading}</h1>
            <p className="text-gray-700">{data.data.paragraph}</p>
          </div>
          <p className="mt-2 text-xs font-medium text-gray-700">
            Last checked at: {new Date(data.data.time).toLocaleString()}
          </p>
          <div className="flex gap-2">
            <Button asChild className="w-fit">
              <Link href={'/login'}>Login</Link>
            </Button>
            <Button asChild variant="outline" className="w-fit">
              <Link href={'/app'}>Go to Apps</Link>
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
