import { Home, Library, MessageCircle, TrendingUp, User } from 'lucide-react'

const navItems = [
  { id: 'dashboard', href: '/app', label: 'Dashboard', icon: Home },
  { id: 'plan', href: '/dashboard/statistics', label: 'Plan', icon: TrendingUp },
  { id: 'chat', href: '/app/chat', label: 'Chat', icon: MessageCircle },
  { id: 'media', href: '/app/media', label: 'Media', icon: Library },
  { id: 'profile', href: '/dashboard/user', label: 'Profile', icon: User }
]

export default navItems
