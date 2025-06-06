'use client'

import { useHasMounted, useScreenSize } from '@/hooks'
import { ReactNode } from 'react'

import MobileMenuNavigationBar from '../elements/mobile-menu-bar'
import LoadingLayouts from './LoadingLayouts'

const Layouts = (props: { children: ReactNode }) => {
  const { isMobile } = useScreenSize()
  const hasMounted = useHasMounted()

  if (!hasMounted) return <LoadingLayouts />

  if (!isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold">📱 Mobile Only</h2>
        <p>Please open this app on a mobile device (max-width: 768px).</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen w-full">
      <MobileMenuNavigationBar />
      {props.children}
    </main>
  )
}

export default Layouts
