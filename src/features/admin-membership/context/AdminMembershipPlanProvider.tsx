import { createContext, type PropsWithChildren } from 'react'
import useGetMembershipPlain from '../hooks/useGetMembershipPlain'
import type { MembershipPlanType } from '../types/membership-type'

type AdminMembershipPlanContextProps = {
  loading: boolean
  fetchMembershipPlan: () => void
  membershipPlan: MembershipPlanType[]
}

const AdminMembershipPlanContext = createContext<AdminMembershipPlanContextProps | undefined>(undefined)

export function AdminMembershipPlanProvider({ children }: PropsWithChildren) {
  const { fetchMembershipPlan, loading, membershipPlan } = useGetMembershipPlain()
  return (
    <AdminMembershipPlanContext.Provider value={{ loading, fetchMembershipPlan, membershipPlan }}>
      {children}
    </AdminMembershipPlanContext.Provider>
  )
}

export default AdminMembershipPlanContext
