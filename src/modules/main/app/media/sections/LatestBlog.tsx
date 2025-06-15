'use client'

import Image from 'next/image'

import { ChevronRight, FileText, Headphones, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const LatestBlog = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [visibleCards] = useState(2.5)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const mediaCarouselRef = useRef<HTMLDivElement>(null)

  const latestMedia = [
    {
      type: 'video',
      title: 'Understanding Gambling Triggers',
      duration: '12:34',
      thumbnail: '',
      category: 'Educational'
    },
    {
      type: 'article',
      title: '5 Strategies to Overcome Urges',
      readTime: '8 min read',
      thumbnail: '',
      category: 'Tips'
    },
    {
      type: 'podcast',
      title: 'Recovery Stories: Week 3',
      duration: '45:12',
      thumbnail: '',
      category: 'Stories'
    },
    {
      type: 'video',
      title: 'Mindfulness for Recovery',
      duration: '18:45',
      thumbnail: '',
      category: 'Wellness'
    }
  ]

  const infiniteMedia = [...latestMedia, ...latestMedia, ...latestMedia]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex(prevIndex => {
        const nextIndex = prevIndex + 1
        if (nextIndex >= latestMedia.length * 2) {
          setTimeout(() => {
            setIsTransitioning(true)
            setCurrentMediaIndex(latestMedia.length)
            setTimeout(() => setIsTransitioning(false), 50)
          }, 700)
          return nextIndex
        }
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [latestMedia.length])

  useEffect(() => {
    setCurrentMediaIndex(latestMedia.length)
  }, [latestMedia.length])

  return (
    <section className="relative">
      <div className="mb-6 flex items-center justify-between px-5">
        <h2 className="text-2xl font-bold text-gray-900">Latest Blog</h2>
        <Button variant="ghost" className="text-blue-600">
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="relative overflow-hidden">
        <div className="-mx-2 overflow-hidden">
          <div
            ref={mediaCarouselRef}
            className={`ml-4 flex ${isTransitioning ? '' : 'transition-transform duration-700 ease-out'}`}
            style={{
              transform: `translateX(-${currentMediaIndex * (100 / visibleCards)}%)`
            }}
          >
            {infiniteMedia.map((item, index) => (
              <div
                key={`${index}-${item.title}`}
                className="flex-shrink-0 px-2 py-6"
                style={{
                  width: `${100 / visibleCards}%`
                }}
              >
                <Card className="group cursor-pointer overflow-hidden py-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-48 w-full bg-gray-600 object-cover transition-transform duration-500 group-hover:scale-110"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="border-0 bg-white/90 text-gray-900 shadow-lg backdrop-blur-md"
                      >
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute right-3 bottom-3">
                      <Badge
                        variant="secondary"
                        className="border-0 bg-black/80 text-white backdrop-blur-md"
                      >
                        {item.type === 'video' && <Play className="mr-1 h-3 w-3" />}
                        {item.type === 'article' && (
                          <FileText className="mr-1 h-3 w-3" />
                        )}
                        {item.type === 'podcast' && (
                          <Headphones className="mr-1 h-3 w-3" />
                        )}
                        {item.duration || item.readTime}
                      </Badge>
                    </div>

                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <div className="scale-75 transform rounded-full bg-white/95 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                          <Play className="ml-1 h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium text-gray-500">New</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlog
