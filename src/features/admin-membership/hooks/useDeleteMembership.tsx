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
        console.log(error)
        toast.error('Xóa gói thất bại')    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleDeleteMembership,
      loading
  }
}
