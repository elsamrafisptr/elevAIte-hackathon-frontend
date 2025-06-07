'use client'

import {
  Calendar,
  LinkIcon,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Settings,
  Shield,
  UserPlus
} from 'lucide-react'
import { useState } from 'react'

import { LazyImage } from '@/components/elements/lazy-image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import type { User } from '@/common/types/users'

/* eslint-disable @typescript-eslint/no-unused-vars */

interface ProfileHeaderProps {
  user: User
  isOwnProfile: boolean
  isFollowing?: boolean
  onFollow?: () => void
  onMessage?: () => void
  onEdit?: () => void
}

export function ProfileHeader({
  user,
  isOwnProfile,
  isFollowing = false,
  onFollow,
  onMessage,
  onEdit
}: ProfileHeaderProps) {
  const [_imageError, setImageError] = useState(false)

  return (
    <div className="relative">
      {/* Cover Image */}
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

      {/* Profile Content */}
      <div className="relative px-6 pb-6">
        {/* Profile Picture */}
        <div className="-mt-16 flex flex-col sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg sm:h-40 sm:w-40">
              <LazyImage
                src={user.profilePicture}
                alt={`${user.displayName}'s profile picture`}
                className="h-full w-full"
                fallback="/placeholder.svg?height=160&width=160"
              />
            </div>
            {user.isVerified && (
              <div className="absolute -right-2 -bottom-2 rounded-full bg-blue-500 p-2">
                <Shield className="h-4 w-4 text-white" aria-label="Verified user" />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex items-center gap-3 sm:mt-0">
            {isOwnProfile ? (
              <Button
                onClick={onEdit}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button
                  onClick={onFollow}
                  variant={isFollowing ? 'outline' : 'default'}
                  className="flex items-center gap-2"
                  aria-label={isFollowing ? 'Unfollow user' : 'Follow user'}
                >
                  <UserPlus className="h-4 w-4" />
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                <Button
                  onClick={onMessage}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="More options">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Report User</DropdownMenuItem>
                    <DropdownMenuItem>Block User</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="mt-6">
          <div className="mb-2 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {user.displayName}
            </h1>
            {user.isVerified && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Verified
              </Badge>
            )}
          </div>
          <p className="mb-1 text-gray-600">@{user.username}</p>

          {/* Bio */}
          {user.bio && (
            <p className="mb-4 max-w-2xl leading-relaxed text-gray-700">{user.bio}</p>
          )}

          {/* Metadata */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">
                {user.following.toLocaleString()}
              </span>
              <span className="text-gray-600">Following</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">
                {user.followers.toLocaleString()}
              </span>
              <span className="text-gray-600">Followers</span>
            </div>
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
