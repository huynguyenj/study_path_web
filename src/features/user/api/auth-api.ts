import { apiPrivate } from '@/services/config/axios.config'
import type { Token } from '@/features/auth/types/token-type'
import type { ResponseStructure } from '@/types/data-response/response'

export const AuthApi = {
      getNewAccessToken: (): Promise<Omit<ResponseStructure<Token>, 'error'>> => apiPrivate.get('/'),
      logout: (): Promise<null> => apiPrivate.post('/Auth/logout')
}