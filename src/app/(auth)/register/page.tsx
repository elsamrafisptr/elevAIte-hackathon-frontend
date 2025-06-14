import { redirect } from 'next/navigation'

import Register from '@/modules/auth/register'

import { getUserFromCookies } from '@/lib/cookies'

const RegisterPage = async () => {
  const { user } = await getUserFromCookies()

  if (user) {
    if (user.status === 1) {
      return redirect('/onboarding')
    }
    return redirect('/app')
  }

  return <Register />
}

export default RegisterPage
