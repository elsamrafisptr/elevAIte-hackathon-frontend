'use client'

import { useCallback, useEffect, useState } from 'react'

import type { OnboardingData, ValidationErrors } from '@/common/types/onboarding'

const STORAGE_KEY = 'onboarding_progress'

const initialData: OnboardingData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  location: '',
  bio: '',
  occupation: '',
  interests: [],
  primaryGoals: [],
  experienceLevel: 'beginner',
  notifications: {
    email: true,
    push: true,
    weekly_summary: true,
    achievement_alerts: true
  },
  privacy: {
    profile_visibility: 'public',
    activity_visibility: 'public'
  },
  theme: 'system'
}

export default function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<OnboardingData>(initialData)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  // Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsedData = JSON.parse(saved)
        setData(parsedData.data || initialData)
        setCurrentStep(parsedData.currentStep || 1)
      } catch (error) {
        console.error('Failed to load saved progress:', error)
      }
    }
  }, [])

  // Save progress to localStorage
  const saveProgress = useCallback(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          data,
          currentStep,
          timestamp: Date.now()
        })
      )
    } catch (error) {
      console.error('Failed to save progress:', error)
    }
  }, [data, currentStep])

  // Update data
  const updateData = useCallback((updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }))
    setErrors({}) // Clear errors when data changes
  }, [])

  // Validation functions
  const validateStep1 = (): boolean => {
    const newErrors: ValidationErrors = {}

    if (!data.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!data.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!data.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    } else {
      const age = new Date().getFullYear() - new Date(data.dateOfBirth).getFullYear()
      if (age < 13) {
        newErrors.dateOfBirth = 'You must be at least 13 years old'
      }
    }
    if (!data.location.trim()) {
      newErrors.location = 'Location is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {}

    if (data.bio.length > 500) {
      newErrors.bio = 'Bio must be 500 characters or less'
    }
    if (!data.occupation.trim()) {
      newErrors.occupation = 'Occupation is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = (): boolean => {
    const newErrors: ValidationErrors = {}

    if (data.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest'
    }
    if (data.primaryGoals.length === 0) {
      newErrors.primaryGoals = 'Please select at least one goal'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = (): boolean => {
    // Step 4 has no required validation as all fields have defaults
    return true
  }

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 1:
        return validateStep1()
      case 2:
        return validateStep2()
      case 3:
        return validateStep3()
      case 4:
        return validateStep4()
      default:
        return true
    }
  }

  // Navigation
  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 5))
      saveProgress()
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  // Complete onboarding
  const completeOnboarding = async () => {
    if (!validateCurrentStep()) return false

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Clear saved progress
      localStorage.removeItem(STORAGE_KEY)

      return true
    } catch (error) {
      console.error('Failed to complete onboarding:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    currentStep,
    data,
    errors,
    isLoading,
    updateData,
    nextStep,
    prevStep,
    goToStep,
    validateCurrentStep,
    completeOnboarding,
    saveProgress
  }
}
