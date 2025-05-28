import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../assets/globals.css'
import Layouts from '@/components/layouts/Layouts'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'No More Gamble',
  description: 'For you to prevent, stop, and heal your gambling addiction'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  )
}
