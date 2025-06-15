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

export default function UserProfile() {
  const [user, setUser] = useState<User>(mockUser)
  const [achievements] = useState<Achievement[]>([])
  const [activities] = useState<Activity[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
        <div className="mb-6 rounded-lg bg-white shadow-sm">
          <ProfileHeader user={user} />
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

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
              <div className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-2">
                <AchievementsSection
                  achievements={achievements.slice(0, 6)}
                  isLoading={false}
                />
                <ActivityFeed activities={activities.slice(0, 5)} isLoading={false} />
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-2">
                <AchievementsSection achievements={achievements} isLoading={false} />
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-2">
                <ActivityFeed activities={activities} isLoading={false} />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
