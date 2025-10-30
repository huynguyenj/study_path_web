import type { MembershipDataType } from '@/features/user-membership/types/membership-data-type'
import { useState } from 'react'
import { MembershipAdminApi } from '../api/api.membership'
import { toast } from 'react-toastify'
import { type UpdateMembership } from '../types/membership-type'
import useAdminMembershipContext from './useAdminMembershipContext'

export default function useEditMembershipPlan() {
  const [membershipPlanDetail, setMembershipPlanDetail] = useState<MembershipDataType>()
  const context = useAdminMembershipContext()
  const [loading, setLoading] = useState(false)
  const fetchMembershipDetail = async (membershipId: string) => {
      try {
        setLoading(true)
        const response = await MembershipAdminApi.getMembershipDetail(membershipId)
        setMembershipPlanDetail(response.data)  
      } catch (error) {
        console.log(error)
        toast.error('Lấy thông tin chi tiết của gói thất bại')    
      } finally {
        setLoading(false)
      }
  }

  const updateMembershipPlan = async (membershipId: string, data: UpdateMembership) => {
            try {
              setLoading(true)
              await MembershipAdminApi.updateMembership(membershipId, data)    
              toast.success('Cập nhật gói thành công')
              context.fetchMembershipPlan()
            } catch (error) {
              console.log(error)
              toast.error('Cập nhật gói thất bại')
            } finally {
              setLoading(false)
            }
  }
  return {
      membershipPlanDetail,
      loading,
      fetchMembershipDetail,
      updateMembershipPlan
  }
}
