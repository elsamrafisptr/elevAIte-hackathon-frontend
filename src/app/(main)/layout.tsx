import { cookies } from 'next/headers'

// import { redirect } from 'next/navigation'

import { ReactNode } from 'react'

const MainAppLayout = async (props: { children: ReactNode }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')

  // if (!token) return redirect('/login')
  console.log(token)

  return <>{props.children}</>
}

export default MainAppLayout
