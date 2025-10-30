import { apiPrivate, apiPublic } from '@/services/config/axios.config'
import type { CreateFeature, CreateMembershipPlan, MembershipFeature, MembershipPlanType, UpdateFeature, UpdateMembership } from '../types/membership-type'
import type { ResponseStructure } from '@/types/data-response/response'

export const MembershipAdminApi = {
   getAllMembership: async (): Promise<ResponseStructure<MembershipPlanType[]>> => await apiPublic.get('/MemberShipPlan/get-all'),
   getMembershipDetail: async (membershipId: string): Promise<ResponseStructure<MembershipPlanType>> => await apiPrivate.get(`/MemberShipPlan/get-by/${membershipId}`),
   createMembership: async (createdData: CreateMembershipPlan): Promise<null> => await apiPrivate.post('/MemberShipPlan/create', createdData),
   updateMembership: async (membershipId: string, updatedData: UpdateMembership): Promise<null> => await apiPrivate.put(`/MemberShipPlan/update-by/${membershipId}`, updatedData),
   deleteMembership: async (membershipId: string): Promise<null> => await apiPrivate.delete(`/MemberShipPlan/delete-by/${membershipId}`),

   createFeature: async (createdData: CreateFeature): Promise<null> => await apiPrivate.post('/Feature/create', createdData),
   getAllFeature: async (): Promise<ResponseStructure<MembershipFeature[]>> => await apiPrivate.get('/Feature/get-all'),
   getFeatureDetail: async (featureId: string): Promise<ResponseStructure<MembershipFeature>> => await apiPrivate.get(`/Feature/get-by/${featureId}`),
   updateFeature: async (featureId: string, updatedData: UpdateFeature): Promise<null> => await apiPrivate.put(`/Feature/update-by/${featureId}`, updatedData),
   deleteFeature: async (featureId: string): Promise<null> => await apiPrivate.delete(`/Feature/delete-by/${featureId}`)
}