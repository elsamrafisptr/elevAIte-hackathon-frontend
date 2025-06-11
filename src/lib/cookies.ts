import { cookies } from 'next/headers'

import { UsersApi } from '@/services'

export async function getUserFromCookies() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value
  if (!token) return null

  try {
    const response = await UsersApi.getCurrentUser('/v1/users/me', token)
    return response.data?.data ?? null
  } catch {
    return null
  }
}
