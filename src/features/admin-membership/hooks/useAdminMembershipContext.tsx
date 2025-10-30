import AdminMembershipPlanContext from '../context/AdminMembershipPlanProvider'
import useContextCheck from '@/hooks/context/useContextCheck'

export default function useAdminMembershipContext() {
 return useContextCheck({ context: AdminMembershipPlanContext, contextName: 'Admin membership context' })
}
