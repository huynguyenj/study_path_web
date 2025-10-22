import type { ResponseStructure } from '@/types/data-response/response'
import type { LoginInformation, LoginResponse } from '../types/login-type'
import { apiPrivate, apiPublic } from '@/services/config/axios.config'
import type { RegisterInformation } from '../types/register-type'

export const AuthApi = {
      login: async (data: LoginInformation):Promise<LoginResponse> => await apiPublic.post('/Auth/login', data),
      register: async (data: RegisterInformation): Promise<ResponseStructure<null>> => await apiPublic.post('/Auth/register', data), 
      logout: async (): Promise<ResponseStructure<null>> => await apiPrivate.post('/Auth/logout')
}