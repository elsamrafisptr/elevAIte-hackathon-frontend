'use client'

import { useState } from 'react'

import { mockPlans } from '@/modules/main/dashboard/plan/Plan'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const Statistic = () => {
  const [plans] = useState(mockPlans)
  const [userStats] = useState({
    totalPoints: 60,
    currentStreak: 3,
    completedPlans: 3,
    level: 1
  })
  const progressPercentage = (userStats.completedPlans / plans.length) * 100

  return (
    <div className="px-5">
      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">Persentase Progres</h3>
              <p className="text-sm text-slate-600">
                Level {userStats.level} • {userStats.completedPlans} dari {plans.length}{' '}
                perjalanan terselesaikan
              </p>
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-slate-700">
              {Math.round(progressPercentage)}% Selesai
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </CardContent>
      </Card>
    </div>
  )
}

export default Statistic
