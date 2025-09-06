import type { ResponseStructure } from '@/types/data-response/response'
import type { LoginInformation, LoginResponse } from '../types/login-type'
import { apiPublic } from '@/services/config/axios.config'

export const AuthApi = {
      login: async (data: LoginInformation):Promise<ResponseStructure<LoginResponse>> => await apiPublic.post('/login', data)
}