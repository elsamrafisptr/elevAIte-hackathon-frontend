'use client'

import { useEffect } from 'react'

import { fetcher, useSWRAxios } from '@/lib/swr'

const Home = () => {
  const { data, error, isLoading, mutate } = useSWRAxios('/api/v1/health/', fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: true
  })

  useEffect(() => {
    if (data) {
      console.log('Health check succeeded:', data)
    }
  }, [data])

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-t from-blue-200 to-blue-50">
      {isLoading && <p>Checking server health…</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {data && (
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Server is {data.message}</h1>
          <p className="mt-2 text-sm text-gray-700">
            Last checked at: {new Date(data.timestamp).toLocaleString()}
          </p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600"
            onClick={() => mutate()}
          >
            {isLoading ? 'Loading...' : 'Re-check Now'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Home
