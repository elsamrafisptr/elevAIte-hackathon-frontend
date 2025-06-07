'use client'

import { AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

import { AchievementsSection } from './sections/Achievements'
import { ActivityFeed } from './sections/ActivitiesFeed'
import { EditProfileForm } from './sections/EditProfileForm'
import { ProfileHeader } from './sections/ProfileHeader'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Achievement, Activity, ProfileFormData, User } from '@/common/types/users'

/* eslint-disable @typescript-eslint/no-unused-vars */

const mockUser: User = {
  id: '1',
  username: 'johndoe',
  displayName: 'John Doe',
  email: 'john@example.com',
  bio: 'Passionate about personal growth and productivity. Always learning something new and helping others achieve their goals. 🚀',
  profilePicture: '',
  coverImage: '',
  location: 'San Francisco, CA',
  website: 'https://johndoe.com',
  joinDate: '2023-01-15',
  isVerified: true,
  followers: 1234,
  following: 567,
  totalPoints: 2850,
  level: 12,
  streak: 15
}

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Completed your first daily plan',
    icon: '🎯',
    unlockedAt: '2024-01-15T10:00:00Z',
    category: 'milestone'
  },
  {
    id: '2',
    title: 'Streak Master',
    description: 'Maintained a 7-day streak',
    icon: '🔥',
    unlockedAt: '2024-01-22T10:00:00Z',
    category: 'productivity'
  },
  {
    id: '3',
    title: 'Knowledge Seeker',
    description: 'Completed 10 learning plans',
    icon: '📚',
    unlockedAt: '2024-02-01T10:00:00Z',
    category: 'learning'
  },
  {
    id: '4',
    title: 'Community Builder',
    description: 'Helped 5 other users',
    icon: '🤝',
    unlockedAt: '2024-02-10T10:00:00Z',
    category: 'social'
  }
]

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'completed_plan',
    title: 'Completed Morning Routine Optimization',
    description: 'Successfully established a powerful morning routine',
    timestamp: '2024-01-20T08:00:00Z',
    points: 20
  },
  {
    id: '2',
    type: 'earned_achievement',
    title: "Earned 'Streak Master' achievement",
    description: 'Maintained a 7-day streak of daily plans',
    timestamp: '2024-01-22T10:00:00Z',
    points: 50
  },
  {
    id: '3',
    type: 'reached_milestone',
    title: 'Reached Level 12',
    description: 'Accumulated 2500+ points through consistent effort',
    timestamp: '2024-01-25T14:30:00Z',
    points: 100
  },
  {
    id: '4',
    type: 'joined_challenge',
    title: 'Joined 30-Day Productivity Challenge',
    description: 'Committed to improving productivity over the next month',
    timestamp: '2024-01-26T09:15:00Z'
  }
]

export default function UserProfile() {
  const [user, setUser] = useState<User>(mockUser)
  const [achievements] = useState<Achievement[]>(mockAchievements)
  const [activities] = useState<Activity[]>(mockActivities)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleSaveProfile = async (formData: ProfileFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      setUser(prev => ({
        ...prev,
        ...formData
      }))
      setIsEditing(false)
    } catch (err) {
      setError('Failed to update profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    setUser(prev => ({
      ...prev,
      followers: isFollowing ? prev.followers - 1 : prev.followers + 1
    }))
  }

  const handleMessage = () => {
    console.log('Opening message dialog...')
  }

  if (isLoading && !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="mb-6 rounded-lg bg-white shadow-sm">
          <ProfileHeader
            user={user}
            isOwnProfile={true}
            isFollowing={isFollowing}
            onFollow={handleFollow}
            onMessage={handleMessage}
            onEdit={() => setIsEditing(true)}
          />
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Main Content */}
        {isEditing ? (
          <div className="rounded-lg bg-white shadow-sm">
            <EditProfileForm
              user={user}
              onSave={handleSaveProfile}
              onCancel={() => setIsEditing(false)}
              isLoading={isLoading}
            />
          </div>
        ) : (
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 rounded-lg bg-white shadow-sm">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <AchievementsSection
                  achievements={achievements.slice(0, 6)}
                  isLoading={false}
                />
                <ActivityFeed activities={activities.slice(0, 5)} isLoading={false} />
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <AchievementsSection achievements={achievements} isLoading={false} />
            </TabsContent>

            <TabsContent value="activity">
              <ActivityFeed activities={activities} isLoading={false} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
