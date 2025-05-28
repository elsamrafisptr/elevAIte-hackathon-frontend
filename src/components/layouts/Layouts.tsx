'use client'

import { useHasMounted } from '@/hooks'
import { ReactNode } from 'react'
import LoadingLayouts from './LoadingLayouts'

const Layouts = (props: { children: ReactNode }) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return <LoadingLayouts />

  return <main className="min-h-screen w-full">{props.children}</main>
}

export default Layouts
