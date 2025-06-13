import { redirect } from 'next/navigation'

import { getUserFromCookies } from '@/lib/cookies'

const DashboardPage = async () => {
  const user = await getUserFromCookies()

  if (!user) return redirect('/login')
  if (user.status !== 2) return redirect('/onboarding')

  return <div>DashboardPage</div>
}

export default DashboardPage
