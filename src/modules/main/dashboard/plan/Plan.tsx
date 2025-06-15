'use client'

import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  Lock,
  Star,
  Target,
  Trophy
} from 'lucide-react'
import { useState } from 'react'

import PageSectionLayout from '@/components/layouts/PageSectionLayout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

import { cn } from '@/lib/utils'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface DailyPlan {
  id: number
  day: number
  title: string
  description: string
  category: 'productivity' | 'wellness' | 'learning' | 'career'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  points: number
  isCompleted: boolean
  isUnlocked: boolean
  tasks: string[]
}

const categories = {
  productivity: { color: 'bg-green-500', icon: Target },
  wellness: { color: 'bg-purple-500', icon: Star },
  learning: { color: 'bg-orange-500', icon: Award },
  career: { color: 'bg-red-500', icon: Trophy }
}

export const mockPlans: any = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  day: i + 1,
  title: [
    'Morning Routine Optimization',
    'Goal Setting Workshop',
    'Time Management Mastery',
    'Mindfulness Practice',
    'Skill Assessment',
    'Network Building',
    'Productivity Systems',
    'Wellness Check-in',
    'Learning Path Design',
    'Career Visioning'
  ][i % 10],
  description: [
    'Establish a powerful morning routine that sets you up for success',
    'Learn to set SMART goals and create actionable plans',
    'Master time management techniques for maximum productivity',
    'Develop mindfulness practices for better focus and clarity',
    'Assess your current skills and identify growth opportunities',
    'Build meaningful professional relationships and connections',
    'Implement proven productivity systems and workflows',
    'Evaluate your physical and mental wellness practices',
    'Design a personalized learning path for continuous growth',
    'Create a clear vision for your career development'
  ][i % 10],
  category: [
    'productivity',
    'career',
    'productivity',
    'wellness',
    'learning',
    'career',
    'productivity',
    'wellness',
    'learning',
    'career'
  ][i % 10] as any,
  difficulty: ['beginner', 'intermediate', 'advanced'][i % 3] as any,
  estimatedTime: ['15 min', '30 min', '45 min'][i % 3],
  points: [10, 20, 30][i % 3],
  isCompleted: i < 3,
  isUnlocked: i < 5,
  tasks: [
    'Complete the morning routine checklist',
    'Reflect on your current habits',
    'Set 3 specific improvement goals'
  ]
}))

export default function Plan() {
  const [plans, setPlans] = useState<DailyPlan[]>(mockPlans)
  const [currentPage, setCurrentPage] = useState(0)
  const [userStats, setUserStats] = useState({
    totalPoints: 60,
    currentStreak: 3,
    completedPlans: 3,
    level: 1
  })

  const cardsPerPage = 10
  const totalPages = Math.ceil(plans.length / cardsPerPage)
  const currentPlans = plans.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  )

  const handleCompleteTask = (planId: number) => {
    setPlans(prev =>
      prev.map(plan => {
        if (plan.id === planId && !plan.isCompleted) {
          const nextPlan = prev.find(p => p.id === planId + 1)
          if (nextPlan) {
            nextPlan.isUnlocked = true
          }

          setUserStats(prevStats => ({
            ...prevStats,
            totalPoints: prevStats.totalPoints + plan.points,
            completedPlans: prevStats.completedPlans + 1,
            currentStreak: prevStats.currentStreak + 1,
            level: Math.floor((prevStats.totalPoints + plan.points) / 100) + 1
          }))

          return { ...plan, isCompleted: true }
        }
        return plan
      })
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const progressPercentage = (userStats.completedPlans / plans.length) * 100

  return (
    <PageSectionLayout>
      <div className="min-h-screen p-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="my-6 flex flex-col items-center justify-between gap-6">
              <div className="flex flex-col items-center">
                <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
                  Perkembangan Perjalanan Kamu
                </h1>
                <p className="max-w-md text-center text-slate-600">
                  Membangun kebiasan lebih baik, setiap waktu dan setiap harinya Build
                  better habits, one day at a time
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <span className="font-semibold text-slate-900">
                    {userStats.currentStreak}
                  </span>
                  <span className="text-sm text-slate-600">Hari Beruntun!</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-slate-900">
                    {userStats.totalPoints}
                  </span>
                  <span className="text-sm text-slate-600">Total Poin</span>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">Persentase Progres</h3>
                    <p className="text-sm text-slate-600">
                      Level {userStats.level} • {userStats.completedPlans} dari{' '}
                      {plans.length} perjalanan terselesaikan
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

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentPlans.map(plan => {
              const CategoryIcon = categories[plan.category].icon
              const isLocked = !plan.isUnlocked

              return (
                <Card
                  key={plan.id}
                  className={`relative transition-all duration-200 hover:shadow-lg ${
                    plan.isCompleted
                      ? 'border-green-200 bg-green-50'
                      : isLocked
                        ? 'border-gray-200 bg-gray-50 opacity-60'
                        : 'cursor-pointer bg-white hover:shadow-md'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`rounded-lg p-2 ${categories[plan.category].color}`}
                        >
                          <CategoryIcon className="h-4 w-4 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Hari ke-{plan.day}
                        </Badge>
                      </div>
                      {plan.isCompleted && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      {isLocked && <Lock className="h-5 w-5 text-gray-400" />}
                    </div>
                    <CardTitle
                      className={`text-lg ${isLocked ? 'text-gray-400' : 'text-slate-900'}`}
                    >
                      {plan.title}
                    </CardTitle>
                    <CardDescription className={isLocked ? 'text-gray-400' : ''}>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {plan.estimatedTime}
                        </span>
                      </div>
                      <Badge className={getDifficultyColor(plan.difficulty)}>
                        {plan.difficulty}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-slate-700">
                          {plan.points} poin
                        </span>
                      </div>

                      {!isLocked && (
                        <Button
                          size="sm"
                          onClick={() => handleCompleteTask(plan.id)}
                          disabled={plan.isCompleted}
                          className={cn(
                            'cursor-pointer',
                            plan.isCompleted ? 'bg-green-600 hover:bg-green-600' : ''
                          )}
                        >
                          {plan.isCompleted ? 'Selesai' : 'Mulai Tantangan'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Sebelumnya
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentPage(i)}
                    className="h-8 w-8 cursor-pointer p-0"
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                className="cursor-pointer"
                size="sm"
                onClick={() =>
                  setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))
                }
                disabled={currentPage === totalPages - 1}
              >
                Selanjutnya
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageSectionLayout>
  )
}
