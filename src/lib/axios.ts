import axios from 'axios'

import packageJson from '../../package.json'
import { Config } from './configs'

const axiosInstance = axios.create({
  baseURL: Config.APP_URL,
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json, text/plain, */*',
    'X-App-Version': packageJson.version
  },
  timeout: 45000,
  withCredentials: true
})

export default axiosInstance
