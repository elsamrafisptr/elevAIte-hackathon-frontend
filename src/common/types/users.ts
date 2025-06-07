/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string
  username: string
  displayName: string
  email: string
  bio: string
  profilePicture: string
  coverImage?: string
  location?: string
  website?: string
  joinDate: string
  isVerified: boolean
  followers: number
  following: number
  totalPoints: number
  level: number
  streak: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
  category: 'productivity' | 'learning' | 'social' | 'milestone'
}

export interface Activity {
  id: string
  type:
    | 'completed_plan'
    | 'earned_achievement'
    | 'reached_milestone'
    | 'joined_challenge'
  title: string
  description: string
  timestamp: string
  points?: number
  metadata?: Record<string, any>
}

export interface ProfileFormData {
  displayName: string
  bio: string
  location: string
  website: string
}
