import { redirect } from 'next/navigation'

import OnBoarding from '@/modules/auth/onboarding'

import { getUserFromCookies } from '@/lib/cookies'

const OnBoardingPage = async () => {
  const { user, token } = await getUserFromCookies()
  if (!token || !user) return redirect('/login')
  if (user.status >= 2) return redirect('/app')

  return <OnBoarding token={token} />
}

export default OnBoardingPage
