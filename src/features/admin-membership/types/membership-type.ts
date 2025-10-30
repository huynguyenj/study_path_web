export type MembershipFeature = {
  id: string
  name: string
  description: string
}
export type MembershipPlanType = {
      id: string
      name: string
      fee: number
      memberShipPlanType: string
      duration: string
      features: MembershipFeature[]
}

export interface CreateMembershipPlan extends Omit<MembershipPlanType, 'id' | 'features'> {
   featureIds: string[]
} 
export type UpdateMembership = CreateMembershipPlan
export type CreateFeature = Omit<MembershipFeature, 'id'> 
export type UpdateFeature = CreateFeature