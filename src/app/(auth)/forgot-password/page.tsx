import { redirect } from 'next/navigation'

import ForgotPassword from '@/modules/auth/forgot-password'

import { getUserFromCookies } from '@/lib/cookies'

const ForgotPasswordPage = async () => {
  const { user } = await getUserFromCookies()

  if (user) {
    if (user.status === 1) {
      return redirect('/onboarding')
    }
    return redirect('/app')
  }

  return <ForgotPassword />
}

export default ForgotPasswordPage
