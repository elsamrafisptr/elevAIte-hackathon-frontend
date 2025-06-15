import { redirect } from 'next/navigation'

import UserProfile from '@/modules/main/dashboard/user-profile'

import { getUserFromCookies } from '@/lib/cookies'

const UserPage = async () => {
  const { user, token } = await getUserFromCookies()

  if (!user || !token) return redirect('/login')
  if (user.status < 2) return redirect('/onboarding')

  return <UserProfile token={token} />
}

export default UserPage
