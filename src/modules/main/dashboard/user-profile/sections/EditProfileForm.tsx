'use client'

import { Save, X } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { ProfileFormData, User } from '@/common/types/users'

interface EditProfileFormProps {
  user: User
  onSave: (data: ProfileFormData) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}

export function EditProfileForm({
  user,
  onSave,
  onCancel,
  isLoading
}: EditProfileFormProps) {
  const [formData, setFormData] = useState<ProfileFormData>({
    displayName: user.displayName,
    bio: user.bio,
    location: user.location || '',
    website: user.website || ''
  })
  const [errors, setErrors] = useState<Partial<ProfileFormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<ProfileFormData> = {}

    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required'
    } else if (formData.displayName.length > 50) {
      newErrors.displayName = 'Display name must be 50 characters or less'
    }

    if (formData.bio.length > 500) {
      newErrors.bio = 'Bio must be 500 characters or less'
    }

    if (formData.website && !isValidUrl(formData.website)) {
      newErrors.website = 'Please enter a valid URL'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      await onSave(formData)
    }
  }

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="displayName">Display Name *</Label>
            <Input
              id="displayName"
              value={formData.displayName}
              onChange={e => handleInputChange('displayName', e.target.value)}
              placeholder="Your display name"
              maxLength={50}
              aria-describedby={errors.displayName ? 'displayName-error' : undefined}
              aria-invalid={!!errors.displayName}
            />
            {errors.displayName && (
              <p id="displayName-error" className="text-sm text-red-600" role="alert">
                {errors.displayName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={e => handleInputChange('bio', e.target.value)}
              placeholder="Tell us about yourself..."
              maxLength={500}
              rows={4}
              aria-describedby={errors.bio ? 'bio-error' : 'bio-help'}
              aria-invalid={!!errors.bio}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span id="bio-help">Share a bit about yourself</span>
              <span>{formData.bio.length}/500</span>
            </div>
            {errors.bio && (
              <p id="bio-error" className="text-sm text-red-600" role="alert">
                {errors.bio}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={e => handleInputChange('location', e.target.value)}
              placeholder="City, Country"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={e => handleInputChange('website', e.target.value)}
              placeholder="https://yourwebsite.com"
              aria-describedby={errors.website ? 'website-error' : undefined}
              aria-invalid={!!errors.website}
            />
            {errors.website && (
              <p id="website-error" className="text-sm text-red-600" role="alert">
                {errors.website}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
