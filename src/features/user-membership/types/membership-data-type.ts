type MembershipFeature = {
  id: string
  name: string
  description: string
}
export type MembershipDataType = {
  id: string
  name: string
  fee: number
  duration: string
  features: MembershipFeature[] 
}

export type MembershipState = {
  isSubScription: boolean
}