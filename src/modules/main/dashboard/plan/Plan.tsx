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
import { useCallback, useEffect, useMemo, useState } from 'react'

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

import { fetcher, useSWRAxios } from '@/lib/swr'
import { cn } from '@/lib/utils'

/* eslint-disable @typescript-eslint/no-explicit-any */

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

interface DailyPlan {
  id: string
  day: number
  title: string
  description: string
  instructions: string[]
  estimatedTime: string
  points: number
  level: number
  isCompleted: boolean
  isUnlocked: boolean
}

const categories: Record<number, { bg: string; Icon: React.FC<any> }> = {
  1: { bg: 'bg-green-500', Icon: Target },
  2: { bg: 'bg-purple-500', Icon: Star },
  3: { bg: 'bg-orange-500', Icon: Award },
  4: { bg: 'bg-red-500', Icon: Trophy }
}

export default function Plan({ token }: { token: string }) {
  const {
    data: resp,
    error,
    isLoading,
    mutate
  } = useSWRAxios('/v1/plans/me', () => fetcher('/v1/plans/me', token), {
    revalidateOnFocus: true,
    refreshInterval: 3_600_000
  })

  const [plans, setPlans] = useState<DailyPlan[]>([])
  const [stats, setStats] = useState({
    totalPoints: 0,
    completedPlans: 0,
    currentStreak: 0,
    level: 1
  })
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (!resp) return

    const normalized = resp.data.data.map(
      (
        item: {
          id: any
          title: any
          description: any
          instruction: string
          point: any
          level: any
          status: any
        },
        idx: number
      ) => ({
        id: item.id,
        day: idx + 1,
        title: item.title,
        description: item.description,
        instructions: item.instruction
          .split('\n')
          .map((s: string) => s.replace(/^-+\s*/, '')),
        estimatedTime: '—',
        points: item.point,
        level: item.level,
        isCompleted: item.status,
        isUnlocked: idx === 0 || resp.data.data[idx - 1]?.status === true
      })
    )

    setPlans(normalized)

    const done = normalized.filter((p: { isCompleted: any }) => p.isCompleted).length
    const pts = normalized.reduce(
      (sum: any, p: { isCompleted: any; points: any }) =>
        sum + (p.isCompleted ? p.points : 0),
      0
    )
    setStats({
      totalPoints: pts,
      completedPlans: done,
      currentStreak: 0,
      level: Math.floor(pts / 100) + 1
    })
  }, [resp])

  const perPage = 8
  const totalPages = useMemo(() => Math.ceil(plans.length / perPage), [plans])
  const visible = useMemo(
    () => plans.slice(page * perPage, (page + 1) * perPage),
    [plans, page]
  )

  const handleComplete = useCallback(
    (id: string) => {
      const plan = plans.find(p => p.id === id)
      if (!plan || plan.isCompleted) return

      setPlans(ps =>
        ps.map(p =>
          p.id === id
            ? { ...p, isCompleted: true }
            : p.day === plan.day + 1
              ? { ...p, isUnlocked: true }
              : p
        )
      )
      setStats(s => {
        const np = s.totalPoints + plan.points
        return {
          totalPoints: np,
          completedPlans: s.completedPlans + 1,
          currentStreak: s.currentStreak + 1,
          level: Math.floor(np / 100) + 1
        }
      })

      mutate()
    },
    [plans, mutate]
  )

  if (isLoading) return <p>Loading your plan…</p>
  if (error) return <p className="text-red-600">Error: {error.message}</p>

  const progressPct = (stats.completedPlans / plans.length) * 100

  return (
    <PageSectionLayout>
      <div className="mx-auto max-w-5xl space-y-8 p-4">
        {/* Header & Progress */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Perjalanan Harian Anda</h1>
          <p className="text-gray-600">
            Selangkah demi selangkah menuju kebiasaan baru tanpa judi online.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-semibold text-slate-900">
                {stats.currentStreak}
              </span>
              <span className="text-sm text-slate-600">Hari Beruntun!</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold text-slate-900">{stats.totalPoints}</span>
              <span className="text-sm text-slate-600">Total Poin</span>
            </div>
          </div>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-left font-semibold text-slate-900">
                    Persentase Progres
                  </h3>
                  <p className="text-sm text-slate-600">
                    Level {stats.level} • {stats.completedPlans} dari {plans.length}{' '}
                    perjalanan terselesaikan
                  </p>
                </div>
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                  {Math.round(progressPct)}% Selesai
                </Badge>
              </div>
              <Progress value={progressPct} className="h-3" />
            </CardContent>
          </Card>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(p => {
            const { bg, Icon } = (categories[p.level] ?? categories[1])!
            return (
              <Card
                key={p.id}
                className={cn(
                  p.isCompleted
                    ? 'border-green-200 bg-green-50'
                    : !p.isUnlocked
                      ? 'border-gray-200 bg-gray-50 opacity-60'
                      : 'hover:shadow-lg'
                )}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn('rounded p-2', bg)}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <Badge variant="outline">Hari {p.day}</Badge>
                    </div>
                    {p.isCompleted ? (
                      <CheckCircle2 className="text-green-600" />
                    ) : (
                      !p.isUnlocked && <Lock className="text-gray-400" />
                    )}
                  </div>
                  <CardTitle className={!p.isUnlocked ? 'text-gray-400' : ''}>
                    {p.title}
                  </CardTitle>
                  <CardDescription className={!p.isUnlocked ? 'text-gray-400' : ''}>
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{p.estimatedTime}</span>
                    </div>
                    <Badge>
                      {['Beginner', 'Intermediate', 'Advanced'][p.level - 1]}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {p.points} poin
                    </span>
                    {p.isUnlocked && (
                      <Button
                        size="sm"
                        disabled={p.isCompleted}
                        onClick={() => handleComplete(p.id)}
                      >
                        {p.isCompleted ? 'Selesai' : 'Mulai Tantangan'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={page === 0}
              onClick={() => setPage(v => v - 1)}
            >
              <ChevronLeft /> Sebelumnya
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={i === page ? 'default' : 'outline'}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              size="sm"
              variant="outline"
              disabled={page === totalPages - 1}
              onClick={() => setPage(v => v + 1)}
            >
              Selanjutnya <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </PageSectionLayout>
  )
}
