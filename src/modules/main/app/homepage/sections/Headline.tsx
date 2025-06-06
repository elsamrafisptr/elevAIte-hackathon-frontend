import Image from 'next/image'

import { Star, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const Headline = () => {
  return (
    <div className="relative">
      <Card className="aspect-video overflow-hidden rounded-none border-0 bg-slate-500">
        <CardContent className="p-0">
          <div className="relative flex h-64 items-center justify-center">
            <Image
              src="/"
              alt="Recovery Journey Illustration"
              fill
              className="object-cover opacity-80"
            />

            <div className="relative z-10 space-y-4 text-center text-white">
              <Badge className="border-white/30 bg-white/20 text-white">
                <Zap className="mr-1 h-3 w-3" />
                Recommended by AI
              </Badge>
              <h1 className="text-3xl font-bold">You&aposre Doing Great!</h1>
              <p className="text-lg opacity-90">127 days strong and counting</p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <Badge className="bg-white font-semibold text-blue-600">
                  <Star className="mr-1 h-3 w-3" />
                  127 Day Streak
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Headline
