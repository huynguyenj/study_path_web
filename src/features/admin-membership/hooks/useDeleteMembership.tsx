import { MembershipAdminApi } from '../api/api.membership'
import { toast } from 'react-toastify'
import useAdminMembershipContext from './useAdminMembershipContext'
import { useState } from 'react'

export default function useDeleteMembership() {
  const context = useAdminMembershipContext()
  const [loading, setLoading] = useState(false)
  const handleDeleteMembership = async (membershipId: string) => {
      try {
        setLoading(true)
        await MembershipAdminApi.deleteMembership(membershipId)
        toast.success('Xóa gói thành công')
        context.fetchMembershipPlan()    
      } catch (error) {
        toast.error(error as string)    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleDeleteMembership,
      loading
  }
}
