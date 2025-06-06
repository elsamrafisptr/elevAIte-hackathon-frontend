'use client'

import Image from 'next/image'

import {
  BookOpen,
  Calendar,
  ChevronRight,
  DollarSign,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react'
import { useEffect, useState } from 'react'

import Features from './sections/Features'
import LatestMedia from './sections/LatestMedia'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'

export default function Homepage() {
  const [daysSinceLastGamble] = useState(23)
  const [moneySaved] = useState(1250)
  const [streakCount] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {}, 60000)
    return () => clearInterval(interval)
  }, [])

  const educationalResources = [
    {
      title: 'The Science of Addiction',
      description: 'Understanding how gambling affects your brain',
      category: 'Science',
      readTime: '15 min',
      image: '/placeholder.svg?height=150&width=200'
    },
    {
      title: 'Building Healthy Habits',
      description: 'Replace gambling with positive activities',
      category: 'Lifestyle',
      readTime: '10 min',
      image: '/placeholder.svg?height=150&width=200'
    },
    {
      title: 'Financial Recovery Guide',
      description: 'Steps to rebuild your financial health',
      category: 'Finance',
      readTime: '20 min',
      image: '/placeholder.svg?height=150&width=200'
    },
    {
      title: 'Family & Relationships',
      description: 'Healing relationships affected by gambling',
      category: 'Relationships',
      readTime: '12 min',
      image: '/placeholder.svg?height=150&width=200'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">GambleFree</span>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Award className="mr-1 h-3 w-3" />
            Level 5
          </Badge>
        </div>
      </header> */}

      <main className="space-y-8">
        {/* User Analysis Headline */}
        <section className="relative">
          <Card className="aspect-[4/3] overflow-hidden rounded-none border-0 bg-slate-500">
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
                  <p className="text-lg opacity-90">
                    {daysSinceLastGamble} days strong and counting
                  </p>
                  <div className="mt-4 flex items-center justify-center space-x-4">
                    <Badge className="bg-white font-semibold text-blue-600">
                      <Star className="mr-1 h-3 w-3" />
                      {streakCount} Day Streak
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-3 gap-4 px-5">
          <Card className="aspect-square text-center transition-shadow hover:shadow-lg">
            <CardContent className="">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-green-100 p-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">${moneySaved}</div>
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
                <div className="text-2xl font-bold text-gray-900">
                  {daysSinceLastGamble}
                </div>
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

        <Features />

        {/* Latest Media Carousel */}
        <LatestMedia />

        {/* Educational Resources Carousel */}
        <section className="px-5">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
            <Button variant="ghost" className="text-blue-600">
              Browse Library <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {educationalResources.map((resource, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <Card className="cursor-pointer overflow-hidden transition-shadow hover:shadow-lg">
                    <Image
                      src={resource.image || '/placeholder.svg'}
                      alt={resource.title}
                      width={200}
                      height={150}
                      className="h-32 w-full object-cover"
                    />
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {resource.category}
                      </Badge>
                      <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                        {resource.title}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {resource.readTime}
                        </span>
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </div>
  )
}
