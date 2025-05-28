'use client'

import NextError from 'next/error'

import { Button } from '@/components/ui/button'

const GlobalErrorPage = (props: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="antialiased">
        <NextError statusCode={0} />
        <p>{props.error.message}</p>

        <div className="mt-6 flex items-center gap-4">
          <Button
            onClick={() => {
              window.location.href = '/'
            }}
          >
            Back to Homepage
          </Button>
          <Button onClick={() => props.reset()}>Try again</Button>
        </div>
      </body>
    </html>
  )
}

export default GlobalErrorPage
