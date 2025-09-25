import { useEffect, useState } from 'react'
import type { MembershipPlanType } from '../types/membership-type'
import { membershipData } from '../membershipData'

export default function useGetMembershipPlain() {
  const [membershipPlan, setMembershipPlan] = useState<MembershipPlanType[]>([])
  useEffect(() => {
      setMembershipPlan(membershipData)
  }, [])
  return { membershipPlan }
}
