import { Calendar, DollarSign, TrendingUp } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const Statistic = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-4 px-5">
        <Card className="aspect-square text-center transition-shadow hover:shadow-lg">
          <CardContent className="">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-green-100 p-3">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">$1280</div>
              <div className="text-sm text-gray-600">Money Saved</div>
            </div>
          </CardContent>
        </Card>

        <Card className="aspect-square text-center transition-shadow hover:shadow-lg">
          <CardContent className="">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-blue-100 p-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Days Clean</div>
            </div>
          </CardContent>
        </Card>

        <Card className="aspect-square text-center transition-shadow hover:shadow-lg">
          <CardContent className="">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-purple-100 p-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Progress Score</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="px-5">
        <div>
          <span>Weekly Progress</span>
          <Badge variant="outline">Week 4</Badge>
        </div>

        <div>
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Urge Resistance</span>
              <span>7/10 days</span>
            </div>
            <Progress value={70} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Target:</span>
              <span className="ml-2 font-semibold">10 days</span>
            </div>
            <div>
              <span className="text-gray-600">Achievement:</span>
              <span className="ml-2 font-semibold text-green-600">7 days</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistic
