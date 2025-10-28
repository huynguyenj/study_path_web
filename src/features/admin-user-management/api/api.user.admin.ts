import type { PaginationResponse, ResponseStructure } from '@/types/data-response/response'
import type { UserManagementType } from '../types/user-type'
import { apiPrivate } from '@/services/config/axios.config'

export const UserAdminApi = {
  getAllUser: async (pageNumber: number, pageSize: number): Promise<ResponseStructure<PaginationResponse<UserManagementType>>> => await apiPrivate.get(`/Admin/get-user-paging?pageNumber=${pageNumber}&pageSize=${pageSize}`)
}