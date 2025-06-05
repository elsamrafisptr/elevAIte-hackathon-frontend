import HealthServices from './health/health'

import axiosInstance from '@/lib/axios'

const HealthApi = new HealthServices(axiosInstance)

export { HealthApi }
