import { redirect } from 'next/navigation'

import Homepage from '@/modules/main/app/homepage'

import { getUserFromCookies } from '@/lib/cookies'

const MainAppPage = async () => {
  const user = await getUserFromCookies()

  if (!user) return redirect('/login')
  if (user.status !== 2) return redirect('/onboarding')

  return <Homepage />
}

export default MainAppPage
