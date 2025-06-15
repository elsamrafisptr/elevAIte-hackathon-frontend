/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios'

class ProfilesServices {
  private readonly axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  private getAuthHeaders(token?: string) {
    return {
      Authorization: `Bearer ${token}`
    }
  }

  async createUserProfile(payload: any, token?: string, signal?: AbortSignal) {
    try {
      const response = await this.axiosInstance.post('/v1/profiles', payload, {
        headers: this.getAuthHeaders(token),
        signal
      })

      return response
    } catch (error: any) {
      console.error('Error fetching user profiles:', error)
      const msg = error?.response?.data?.message || 'Failed to fetch user profiles'
      throw new Error(msg)
    }
  }
}

export default ProfilesServices
