'use client'

import { useHasMounted } from '@/hooks'
import { ReactNode } from 'react'
import LoadingLayouts from './LoadingLayouts'
import MenuNavigationBar from '../elements/menu-bar'

const Layouts = (props: { children: ReactNode }) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return <LoadingLayouts />

  return (
    <main className="min-h-screen w-full">
      <MenuNavigationBar />
      {props.children}
    </main>
  )
}

export default Layouts
