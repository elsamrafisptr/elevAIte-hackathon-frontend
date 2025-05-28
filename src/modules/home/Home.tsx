import Link from 'next/link'

const Home = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Register</Link>
      <Link href={'/forgot-password'}>Forgot Password</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/app'}>Main App</Link>
    </section>
  )
}

export default Home
