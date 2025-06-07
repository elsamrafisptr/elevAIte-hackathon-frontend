'use client'

import { CheckCircle2, Clock, Target, Trophy, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import type { Activity } from '@/common/types/users'

interface ActivityFeedProps {
  activities: Activity[]
  isLoading?: boolean
}

const activityIcons = {
  completed_plan: CheckCircle2,
  earned_achievement: Trophy,
  reached_milestone: Target,
  joined_challenge: Users
}

const activityColors = {
  completed_plan: 'text-green-600',
  earned_achievement: 'text-yellow-600',
  reached_milestone: 'text-blue-600',
  joined_challenge: 'text-purple-600'
}

export function ActivityFeed({ activities, isLoading }: ActivityFeedProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex animate-pulse items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex-1">
                  <div className="mb-2 h-4 rounded bg-gray-200"></div>
                  <div className="h-3 w-2/3 rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (activities.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>No recent activity to show.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-600" />
          Recent Activity
        </CardTitle>
        <CardDescription>Your latest achievements and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map(activity => {
            const IconComponent = activityIcons[activity.type]
            const iconColor = activityColors[activity.type]

            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50"
                role="article"
                aria-labelledby={`activity-${activity.id}-title`}
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    <IconComponent className={`h-4 w-4 ${iconColor}`} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    id={`activity-${activity.id}-title`}
                    className="mb-1 text-sm font-medium text-gray-900"
                  >
                    {activity.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">{activity.description}</p>
                  <div className="flex items-center gap-2">
                    <time
                      className="text-xs text-gray-500"
                      dateTime={activity.timestamp}
                    >
                      {new Date(activity.timestamp).toLocaleDateString()}
                    </time>
                    {activity.points && (
                      <Badge variant="secondary" className="text-xs">
                        +{activity.points} pts
                      </Badge>
                    )}
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
