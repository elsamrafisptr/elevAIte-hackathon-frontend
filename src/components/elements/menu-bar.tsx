import Link from 'next/link'

const MenuNavigationBar = () => {
  return (
    <header className="fixed top-0 flex h-20 w-full items-center justify-center bg-white px-16 drop-shadow-sm drop-shadow-slate-200">
      <nav className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={'/'}>Home</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href={'/app'}>Main App</Link>
          <Link href={'/dashboard'}>Dashboard</Link>
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'}>Register</Link>
          <Link href={'/forgot-password'}>Forgot Password</Link>
        </div>
      </nav>
    </header>
  )
}

export default MenuNavigationBar
