import { usePathname } from 'next/navigation'

import { MOBILE_NAVIGATION_BLOCKER } from '@/common/constants'
import { Home, Library, MessageCircle, Settings, User } from 'lucide-react'
import { useState } from 'react'

const MobileMenuNavigationBar = () => {
  const [activeNavItem, setActiveNavItem] = useState('dashboard')
  const pathname = usePathname()

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'resources', label: 'Resources', icon: Library },
    { id: 'community', label: 'Community', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const handleNavClick = (itemId: string) => {
    setActiveNavItem(itemId)
    console.log(`Navigating to ${itemId}`)
  }

  if (MOBILE_NAVIGATION_BLOCKER.includes(pathname)) return null

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = activeNavItem === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center p-2 transition-all duration-200 ${
                isActive
                  ? 'scale-105 transform text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 active:scale-95'
              }`}
            >
              <div
                className={`rounded-xl p-2 transition-all duration-200 ${
                  isActive ? 'bg-blue-100 shadow-sm' : 'hover:bg-gray-100'
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-current'}`}
                />
              </div>
              <span
                className={`mt-1 text-xs font-medium transition-all duration-200 ${
                  isActive ? 'font-semibold text-blue-600' : 'text-current'
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 h-0.5 w-8 -translate-x-1/2 transform rounded-full bg-blue-600" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileMenuNavigationBar
