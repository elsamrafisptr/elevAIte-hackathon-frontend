'use client'

import { Shield, User as UserIcon } from 'lucide-react'
import { useState } from 'react'

import { LazyImage } from '@/components/elements/lazy-image'
import { Badge } from '@/components/ui/badge'

import type { User } from '@/common/types/users'

/* eslint-disable @typescript-eslint/no-unused-vars */

interface ProfileHeaderProps {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const [_imageError, setImageError] = useState(false)

  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:h-64">
        {user.coverImage && (
          <LazyImage
            src={user.coverImage}
            alt="Cover image"
            className="h-full w-full rounded-t-lg"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="relative px-6 pb-6">
        <div className="-mt-16 flex flex-col sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg sm:h-40 sm:w-40">
              {false ? (
                <LazyImage
                  src={user.profilePicture}
                  alt={`${user.displayName}'s profile picture`}
                  className="h-full w-full"
                  fallback="/placeholder.svg?height=160&width=160"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-blue-500">
                  <UserIcon className="size-16 text-white" />
                </div>
              )}
            </div>
            {user.isVerified && (
              <div className="absolute -right-2 -bottom-2 rounded-full bg-blue-500 p-2">
                <Shield className="h-4 w-4 text-white" aria-label="Verified user" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              @{user.username}
            </h1>
            {user.isVerified && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Verified
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">
                {user.totalPoints.toLocaleString()}
              </span>
              <span className="text-gray-600">Points</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">Level {user.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
