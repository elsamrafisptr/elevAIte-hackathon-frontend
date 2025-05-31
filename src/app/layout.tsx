import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '../assets/globals.css'

import Layouts from '@/components/layouts/Layouts'

export const viewport = {
  maximumScale: 1
}

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Layouts>{children}</Layouts>
      </body>
    </html>
  )
}
