'use client'

import { Star, Target, Trophy, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import type { Achievement } from '@/common/types/users'

interface AchievementsSectionProps {
  achievements: Achievement[]
  isLoading?: boolean
}

const categoryIcons = {
  productivity: Target,
  learning: Star,
  social: Users,
  milestone: Trophy
}

const categoryColors = {
  productivity: 'bg-green-100 text-green-800',
  learning: 'bg-blue-100 text-blue-800',
  social: 'bg-purple-100 text-purple-800',
  milestone: 'bg-yellow-100 text-yellow-800'
}

export function AchievementsSection({
  achievements,
  isLoading
}: AchievementsSectionProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-24 rounded-lg bg-gray-200"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (achievements.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>
            No achievements yet. Keep working to unlock your first badge!
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Achievements
        </CardTitle>
        <CardDescription>
          {achievements.length} achievement{achievements.length !== 1 ? 's' : ''}{' '}
          unlocked
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(achievement => {
            const IconComponent = categoryIcons[achievement.category]
            return (
              <div
                key={achievement.id}
                className="group relative rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-md"
                role="article"
                aria-labelledby={`achievement-${achievement.id}-title`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      id={`achievement-${achievement.id}-title`}
                      className="mb-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-gray-700"
                    >
                      {achievement.title}
                    </h3>
                    <p className="mb-2 line-clamp-2 text-xs text-gray-600">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={`text-xs ${categoryColors[achievement.category]}`}
                      >
                        {achievement.category}
                      </Badge>
                      <time
                        className="text-xs text-gray-500"
                        dateTime={achievement.unlockedAt}
                      >
                        {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
