import { Star, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const Headline = () => {
  return (
    <div className="relative">
      <Card className="aspect-video overflow-hidden rounded-none border-0 bg-gradient-to-br from-blue-700 to-sky-600">
        <CardContent className="p-0">
          <div className="relative flex h-64 items-center justify-center">
            <div className="object-cover transition-transform duration-500 group-hover:scale-110" />

            <div className="relative z-10 space-y-4 text-center text-white">
              <Badge className="border-white/30 bg-white/20 text-white">
                <Zap className="mr-1 h-3 w-3" />
                Teranalaisis oleh AI
              </Badge>
              <h1 className="text-3xl font-bold">
                Lingkungan Terbaik Untuk Mendukung Anda Jadi Lebih Baik
              </h1>
              <p className="text-lg opacity-90">Semangat dan Jangan Menyerah!</p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <Badge className="bg-white font-semibold text-blue-600">
                  <Star className="mr-1 h-3 w-3" />
                  128 Hari Beruntun
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
