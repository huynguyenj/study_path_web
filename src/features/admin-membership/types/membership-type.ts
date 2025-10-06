export type MembershipPlanType = {
      id: string | number
      name: string
      fee: number
      duration: string
      features: Record<'name'|'description', string>[]
}