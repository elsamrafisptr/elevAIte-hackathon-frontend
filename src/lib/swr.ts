/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR, { SWRConfiguration } from 'swr'

import axiosInstance from './axios'

export interface SWRResult<T> {
  data: T | undefined
  error: Error | undefined
  isLoading: boolean
  mutate: () => Promise<T | undefined>
}

export function useSWRAxios<T>(
  key: string | null,
  fetcherFn: () => Promise<T>,
  config?: Omit<SWRConfiguration<T, any>, 'fallbackData'>
): SWRResult<T> {
  const { data, error, isValidating, mutate } = useSWR<T, any>(key, fetcherFn, {
    revalidateOnFocus: true,
    ...config
  })

  return {
    data,
    error,
    isLoading: isValidating && !data && !error,
    mutate: async () => {
      await mutate()
      return data
    }
  }
}

export const fetcher = async (url: string, token?: string) => {
  const res = await axiosInstance.get(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  })
  return res
}
