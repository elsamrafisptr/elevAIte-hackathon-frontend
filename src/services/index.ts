import HealthServices from './health/health'
import UsersServices from './users/users'

import axiosInstance from '@/lib/axios'

const HealthApi = new HealthServices(axiosInstance)
const UsersApi = new UsersServices(axiosInstance)

export { HealthApi, UsersApi }
