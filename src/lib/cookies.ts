import { cookies } from 'next/headers'

import { UsersApi } from '@/services'

export async function getUserFromCookies() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value ?? null
  if (!token) return { user: null, token: null }

  try {
    const response = await UsersApi.getCurrentUser('/v1/users/me', token)
    const user = response.data?.data ?? null
    return { user, token }
  } catch {
    return { user: null, token: null }
  }
}
