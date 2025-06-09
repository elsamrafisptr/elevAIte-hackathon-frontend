'use client'

import { Calendar, MapPin, User } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { OnboardingData, ValidationErrors } from '@/common/types/onboarding'

interface StepOneProps {
  data: OnboardingData
  errors: ValidationErrors
  onUpdate: (updates: Partial<OnboardingData>) => void
}

export function StepOne({ data, errors, onUpdate }: StepOneProps) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle className="text-2xl">Welcome! Let&apos;s get to know you</CardTitle>
        <CardDescription>
          Tell us a bit about yourself to personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={data.firstName}
              onChange={e => onUpdate({ firstName: e.target.value })}
              placeholder="Enter your first name"
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              aria-invalid={!!errors.firstName}
              className={errors.firstName ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-600" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={data.lastName}
              onChange={e => onUpdate({ lastName: e.target.value })}
              placeholder="Enter your last name"
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              aria-invalid={!!errors.lastName}
              className={errors.lastName ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-600" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date of Birth *
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={e => onUpdate({ dateOfBirth: e.target.value })}
            max={new Date().toISOString().split('T')[0]}
            aria-describedby={errors.dateOfBirth ? 'dateOfBirth-error' : undefined}
            aria-invalid={!!errors.dateOfBirth}
            className={errors.dateOfBirth ? 'border-red-500 focus:border-red-500' : ''}
          />
          {errors.dateOfBirth && (
            <p id="dateOfBirth-error" className="text-sm text-red-600" role="alert">
              {errors.dateOfBirth}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location *
          </Label>
          <Input
            id="location"
            value={data.location}
            onChange={e => onUpdate({ location: e.target.value })}
            placeholder="City, Country"
            aria-describedby={errors.location ? 'location-error' : undefined}
            aria-invalid={!!errors.location}
            className={errors.location ? 'border-red-500 focus:border-red-500' : ''}
          />
          {errors.location && (
            <p id="location-error" className="text-sm text-red-600" role="alert">
              {errors.location}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
