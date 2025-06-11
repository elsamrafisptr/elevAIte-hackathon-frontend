/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios'

class UsersServices {
  private readonly axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  private getAuthHeaders(token?: string) {
    return {
      Authorization: `Bearer ${token}`
    }
  }

  async getCurrentUser(
    url: string = '/api/v1/users/me',
    token?: string,
    signal?: AbortSignal
  ) {
    try {
      const response = await this.axiosInstance.get(url, {
        headers: this.getAuthHeaders(token),
        signal
      })

      return response
    } catch (error: any) {
      console.error('Error fetching users:', error)
      const msg = error?.response?.data?.message || 'Failed to fetch users'
      throw new Error(msg)
    }
  }
}

export default UsersServices
