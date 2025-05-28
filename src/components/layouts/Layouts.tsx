'use client'

import { useHasMounted, useScreenSize } from '@/hooks'
import { ReactNode } from 'react'

import MenuNavigationBar from '../elements/menu-bar'
import MobileMenuNavigationBar from '../elements/mobile-menu-bar'
import LoadingLayouts from './LoadingLayouts'

const Layouts = (props: { children: ReactNode }) => {
  const { isMobile } = useScreenSize()
  const hasMounted = useHasMounted()

  if (!hasMounted) return <LoadingLayouts />

  return (
    <main className="min-h-screen w-full">
      {!isMobile ? <MenuNavigationBar token={false} /> : <MobileMenuNavigationBar />}
      {props.children}
    </main>
  )
}

export default Layouts
