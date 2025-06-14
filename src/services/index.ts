import HealthServices from './health/health'
import ProfilesServices from './users/profiles'
import UsersServices from './users/users'

import axiosInstance from '@/lib/axios'

const HealthApi = new HealthServices(axiosInstance)
const UsersApi = new UsersServices(axiosInstance)
const UserProfilesApi = new ProfilesServices(axiosInstance)

export { HealthApi, UsersApi, UserProfilesApi }
