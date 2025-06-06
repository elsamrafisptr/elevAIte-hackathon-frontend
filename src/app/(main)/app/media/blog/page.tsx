'use client'

import Image from 'next/image'

import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Lock,
  MessageCircle,
  Play,
  Star,
  Users
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function EducationPage() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Recovery Fundamentals',
      description:
        'Comprehensive course covering all aspects of gambling addiction recovery, from understanding triggers to building lasting habits.',
      instructor: 'Dr. Sarah Wilson',
      instructorAvatar: '/placeholder.svg?height=40&width=40',
      duration: '6 weeks',
      lessons: 24,
      students: 1234,
      rating: 4.9,
      reviews: 156,
      image: '/placeholder.svg?height=200&width=300',
      level: 'Beginner',
      category: 'Foundation',
      price: 'Free',
      progress: 0,
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Cognitive Behavioral Therapy',
      description:
        'Deep dive into CBT techniques specifically designed for gambling addiction recovery and relapse prevention.',
      instructor: 'Dr. Michael Chen',
      instructorAvatar: '/placeholder.svg?height=40&width=40',
      duration: '4 weeks',
      lessons: 16,
      students: 567,
      rating: 4.8,
      reviews: 89,
      image: '/placeholder.svg?height=200&width=300',
      level: 'Advanced',
      category: 'Therapy',
      price: 'Premium',
      progress: 35,
      featured: false
    },
    {
      id: 3,
      title: 'Financial Recovery & Money Management',
      description:
        'Learn to rebuild your financial health, manage debt, and create sustainable money habits after gambling addiction.',
      instructor: 'Financial Recovery Team',
      instructorAvatar: '/placeholder.svg?height=40&width=40',
      duration: '3 weeks',
      lessons: 12,
      students: 890,
      rating: 4.7,
      reviews: 124,
      image: '/placeholder.svg?height=200&width=300',
      level: 'Intermediate',
      category: 'Finance',
      price: 'Free',
      progress: 0,
      featured: false
    }
  ]

  const learningPaths = [
    {
      title: 'Complete Recovery Journey',
      description: 'Start-to-finish path covering all aspects of recovery',
      courses: 8,
      duration: '12 weeks',
      level: 'All Levels',
      image: '/placeholder.svg?height=150&width=200',
      progress: 15
    },
    {
      title: 'Quick Start Recovery',
      description: 'Essential skills for immediate recovery support',
      courses: 4,
      duration: '2 weeks',
      level: 'Beginner',
      image: '/placeholder.svg?height=150&width=200',
      progress: 0
    },
    {
      title: 'Advanced Techniques',
      description: 'Deep therapeutic approaches for long-term success',
      courses: 6,
      duration: '8 weeks',
      level: 'Advanced',
      image: '/placeholder.svg?height=150&width=200',
      progress: 60
    }
  ]

  const skillModules = [
    {
      title: 'Trigger Recognition',
      description: 'Learn to identify your personal gambling triggers',
      duration: '45 min',
      type: 'Interactive',
      difficulty: 'Beginner',
      completed: true
    },
    {
      title: 'Mindfulness Meditation',
      description: 'Practice mindfulness techniques for urge management',
      duration: '30 min',
      type: 'Guided Practice',
      difficulty: 'Beginner',
      completed: true
    },
    {
      title: 'Relapse Prevention Planning',
      description: 'Create your personalized relapse prevention strategy',
      duration: '60 min',
      type: 'Workshop',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      title: 'Family Communication',
      description: 'Improve communication with family and friends',
      duration: '40 min',
      type: 'Role Play',
      difficulty: 'Intermediate',
      completed: false
    }
  ]

  const certifications = [
    {
      title: 'Recovery Fundamentals Certificate',
      description: 'Complete understanding of gambling addiction recovery basics',
      requirements: 'Complete 5 core modules',
      duration: '2-3 weeks',
      badge: '/placeholder.svg?height=80&width=80',
      earned: false,
      progress: 60
    },
    {
      title: 'Peer Support Specialist',
      description: 'Qualified to provide peer support to others in recovery',
      requirements: 'Complete advanced training + 6 months clean',
      duration: '6-8 weeks',
      badge: '/placeholder.svg?height=80&width=80',
      earned: false,
      progress: 0
    }
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section className="rounded-2xl bg-gradient-to-r from-green-600 to-teal-600 py-8 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Recovery Education Center</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          Master the skills and knowledge needed for lasting recovery through
          expert-designed courses and interactive modules
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4">
          <Badge className="border-white/30 bg-white/20 text-white">
            <Award className="mr-1 h-3 w-3" />
            Certified Content
          </Badge>
          <Badge className="border-white/30 bg-white/20 text-white">
            <Users className="mr-1 h-3 w-3" />
            Expert Instructors
          </Badge>
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <Button variant="ghost" className="text-blue-600">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Hero Course */}
          <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="md:flex">
              <div className="relative md:w-1/2">
                <Image
                  src={featuredCourses[0]?.image || '/placeholder.svg'}
                  alt={featuredCourses[0]!.title}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">
                  Featured
                </Badge>
                <div className="absolute right-4 bottom-4">
                  <Badge className="bg-green-600 text-white">
                    {featuredCourses[0]?.price}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 md:w-1/2">
                <div>
                  <div className="mb-3 flex items-center space-x-2">
                    <Badge variant="outline">{featuredCourses[0]?.category}</Badge>
                    <Badge variant="secondary">{featuredCourses[0]?.level}</Badge>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {featuredCourses[0]?.title}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {featuredCourses[0]?.description}
                  </p>

                  <div className="mb-4 flex items-center space-x-3">
                    <Image
                      src={featuredCourses[0]?.instructorAvatar || '/placeholder.svg'}
                      alt={featuredCourses[0]!.instructor}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium text-gray-900">
                      {featuredCourses[0]?.instructor}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredCourses[0]?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{featuredCourses[0]?.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{featuredCourses[0]?.students} students</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {featuredCourses[0]?.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({featuredCourses[0]!.reviews})
                      </span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Start Learning
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Other Featured Courses */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredCourses.slice(1).map(course => (
              <Card
                key={course.id}
                className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={course.image || '/placeholder.svg'}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge
                      className={
                        course.price === 'Free'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                      }
                    >
                      {course.price}
                    </Badge>
                  </div>

                  <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                    {course.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {course.description}
                  </p>

                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-blue-600">
                          {course.progress}%
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{course.lessons}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    variant={course.progress > 0 ? 'default' : 'outline'}
                  >
                    {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Learning Paths</h2>
          <Button variant="ghost" className="text-blue-600">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {learningPaths.map((path, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={path.image || '/placeholder.svg'}
                alt={path.title}
                width={200}
                height={150}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <CardContent className="p-5">
                <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {path.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{path.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{path.courses} courses</span>
                    <span>{path.duration}</span>
                  </div>

                  {path.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-blue-600">
                          {path.progress}%
                        </span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                  )}

                  <Badge variant="secondary" className="w-fit">
                    {path.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skill Modules */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Quick Skill Modules</h2>
          <Button variant="ghost" className="text-blue-600">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillModules.map((module, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                        {module.title}
                      </h3>
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Lock className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <p className="mb-3 text-sm text-gray-600">{module.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{module.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {module.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {module.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="ml-4">
                    {module.type === 'Interactive' && (
                      <Play className="h-5 w-5 text-blue-500" />
                    )}
                    {module.type === 'Guided Practice' && (
                      <Users className="h-5 w-5 text-green-500" />
                    )}
                    {module.type === 'Workshop' && (
                      <BookOpen className="h-5 w-5 text-purple-500" />
                    )}
                    {module.type === 'Role Play' && (
                      <MessageCircle className="h-5 w-5 text-orange-500" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          <Button variant="ghost" className="text-blue-600">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={cert.badge || '/placeholder.svg'}
                    alt={cert.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                      {cert.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">{cert.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Requirements:</span>{' '}
                        {cert.requirements}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {cert.duration}
                      </div>
                    </div>

                    {cert.progress > 0 && (
                      <div className="mt-4">
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-blue-600">
                            {cert.progress}%
                          </span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
