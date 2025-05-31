import { cookies } from 'next/headers'
import { ReactNode } from 'react'

const MainAppLayout = async (props: { children: ReactNode }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')

  console.log(token)

  return <>{props.children}</>
}

export default MainAppLayout
