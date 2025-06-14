import { redirect } from 'next/navigation'

import Plan from '@/modules/main/dashboard/plan'

import { getUserFromCookies } from '@/lib/cookies'

const PlanPage = async () => {
  const user = await getUserFromCookies()

  if (!user) return redirect('/login')
  if (user.status < 2) return redirect('/onboarding')

  return <Plan />
}

export default PlanPage
