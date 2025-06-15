import { redirect } from 'next/navigation'

import Plan from '@/modules/main/dashboard/plan'

import { getUserFromCookies } from '@/lib/cookies'

const PlanPage = async () => {
  const { user, token } = await getUserFromCookies()

  if (!user || !token) return redirect('/login')
  if (user.status < 2) return redirect('/onboarding')

  return <Plan token={token} />
}

export default PlanPage
