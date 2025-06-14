import { redirect } from 'next/navigation'

import Chat from '@/modules/main/app/chat'

import { getUserFromCookies } from '@/lib/cookies'

const ChatPage = async () => {
  const user = await getUserFromCookies()

  if (!user) return redirect('/login')
  if (user.status < 2) return redirect('/onboarding')

  return <Chat />
}

export default ChatPage
