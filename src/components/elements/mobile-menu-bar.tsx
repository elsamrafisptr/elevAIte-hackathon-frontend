import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MOBILE_NAVIGATION_BLOCKER } from '@/common/constants'

const MobileMenuNavigationBar = () => {
  const pathname = usePathname()

  if (MOBILE_NAVIGATION_BLOCKER.includes(pathname)) return null

  return (
    <header className="fixed bottom-0 flex h-20 w-full items-center justify-center bg-white px-16 drop-shadow-sm drop-shadow-slate-200">
      <nav className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={'/'}>Home</Link>
        </div>
        <div className="flex items-center gap-6"></div>
      </nav>
    </header>
  )
}

export default MobileMenuNavigationBar
