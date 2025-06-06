import Link from 'next/link'

import { ArrowLeft, Home } from 'lucide-react'

import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

const NotFoundLayouts = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-lg overflow-hidden border-0 bg-transparent shadow-none">
        <CardContent className="p-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="text-[120px] font-bold text-gray-200">404</div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
              <p className="text-gray-600">
                We couldn&apos;t find the page you&apos;re looking for. It might have
                been moved or doesn&apos;t exist.
              </p>
            </div>

            <Link href="/" className="flex-1 hover:cursor-pointer">
              <Button className="w-full hover:cursor-pointer" variant="default">
                <Home className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Button>
            </Link>

            <div className="border-t border-gray-100 pt-4">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Return to previous page</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default NotFoundLayouts
