import axios, { AxiosError, HttpStatusCode, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { env } from '../../configuration/environment'
import { store } from '../../store/store'
import type { ResponseStructure } from '../../types/data-response/response'
import { AuthApi } from '../../features/user/api/auth-api'
import { saveToken } from '../../features/auth/auth-slice/token-slice'

export const apiPrivate = axios.create({
      baseURL: env.BASE_API_ENDPOINT
})

export const apiPublic = axios.create({
      baseURL: env.BASE_API_ENDPOINT,
      withCredentials: true
})

apiPublic.interceptors.response.use((response: AxiosResponse) => {
     return response.data
}, (error: AxiosError) => {
     return Promise.reject(error) 
})

apiPrivate.interceptors.request.use(( config: InternalAxiosRequestConfig ) => {
      const token = store.getState().token.access_token
      if (token) {
            config.headers.Authorization = `Bearer ${token}`
      }
      return config
}, (error: AxiosError) => {
      return Promise.reject(error)
})

apiPrivate.interceptors.response.use(( response: AxiosResponse ) => {
      return response.data
}, async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig
      const errorResponse = error.response?.data as Omit<ResponseStructure<null>, 'data'>
      if (errorResponse.status === HttpStatusCode.Unauthorized && errorResponse.message === 'TOKEN_EXPIRED') {
            try {
                  const newAccessTokenResponse = await AuthApi.getNewAccessToken()
                  const newAccessToken = newAccessTokenResponse.data.access_token
                  store.dispatch(saveToken({ access_token: newAccessToken }))
                  originalRequest.headers = {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${newAccessToken}`
                  }
                  return apiPrivate(originalRequest)
            } catch (error) {
                  return Promise.reject(error)
            }
      }
      return Promise.reject(error.message)
})