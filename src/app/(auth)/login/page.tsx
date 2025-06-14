import { redirect } from 'next/navigation'

import Login from '@/modules/auth/login'

import { getUserFromCookies } from '@/lib/cookies'

const LoginPage = async () => {
  const { user } = await getUserFromCookies()

  if (user) {
    if (user.status === 1) {
      return redirect('/onboarding')
    }
    return redirect('/app')
  }

  return <Login />
}

export default LoginPage
