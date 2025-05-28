import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ReactNode } from 'react'

const AuthLayout = async (props: { children: ReactNode }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')

  if (token) return redirect('/app')

  return <>{props.children}</>
}

export default AuthLayout
