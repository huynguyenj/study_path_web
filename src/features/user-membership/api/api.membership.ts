import { apiPublic } from '@/services/config/axios.config'
import type { ResponseStructure } from '@/types/data-response/response'
import type { MembershipDataType } from '../types/membership-data-type'

export const UserMembershipApi = {
  getAllMembership: async (): Promise<ResponseStructure<MembershipDataType[]>> => await apiPublic.get('/MemberShipPlan/get-all')
}