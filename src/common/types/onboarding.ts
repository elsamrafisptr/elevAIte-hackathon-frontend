export interface OnboardingData {
  // Step 1: Basic Profile
  firstName: string
  lastName: string
  dateOfBirth: string
  location: string

  // Step 2: Profile Details
  profilePicture?: File | string
  bio: string
  occupation: string

  // Step 3: Interests & Goals
  interests: string[]
  primaryGoals: string[]
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'

  // Step 4: Preferences
  notifications: {
    email: boolean
    push: boolean
    weekly_summary: boolean
    achievement_alerts: boolean
  }
  privacy: {
    profile_visibility: 'public' | 'friends' | 'private'
    activity_visibility: 'public' | 'friends' | 'private'
  }
  theme: 'light' | 'dark' | 'system'
}

export interface OnboardingStep {
  id: number
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
}

export interface ValidationErrors {
  [key: string]: string | undefined
}
