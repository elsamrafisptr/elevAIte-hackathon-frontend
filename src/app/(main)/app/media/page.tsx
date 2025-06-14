import { redirect } from 'next/navigation'

import Media from '@/modules/main/app/media'

import { getUserFromCookies } from '@/lib/cookies'

const MediaPage = async () => {
  const { user } = await getUserFromCookies()

  if (!user) return redirect('/login')
  if (user.status < 2) return redirect('/onboarding')

  return <Media />
}

export default MediaPage
