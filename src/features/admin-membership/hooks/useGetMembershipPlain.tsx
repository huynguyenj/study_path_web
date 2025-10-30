import { useCallback, useEffect, useState } from 'react'
import type { MembershipPlanType } from '../types/membership-type'
import { toast } from 'react-toastify'
import { MembershipAdminApi } from '../api/api.membership'

export default function useGetMembershipPlain() {
  const [membershipPlan, setMembershipPlan] = useState<MembershipPlanType[]>([])
  const [loading, setLoading] = useState(false)
  const fetchMembershipPlan = useCallback( async () => {
    try {
      setLoading(true)
      const response = await MembershipAdminApi.getAllMembership()
      setMembershipPlan(response.data)
    } catch (error) {
      console.log(error)
      toast.error('Lấy danh sách gói thành viên thất bại')
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
      fetchMembershipPlan()
  }, [])
  return { membershipPlan, loading, fetchMembershipPlan }
}
