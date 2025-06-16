import axios from 'axios'

import packageJson from '../../package.json'
import { Config } from './configs'

const isServer = typeof window === 'undefined'

const axiosInstance = axios.create({
  baseURL: isServer ? Config.APP_URL : '/api',
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json',
    'X-App-Version': packageJson.version
  },
  timeout: 45000,
  withCredentials: true
})

export default axiosInstance
