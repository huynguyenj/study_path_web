import { useEffect, useState } from 'react'
import type { MembershipDataType } from '../types/membership-data-type'
import { toast } from 'react-toastify'
import { UserMembershipApi } from '../api/api.membership'

export default function useGetMembership() {
  const [membershipList, setMembershipList] = useState<MembershipDataType[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        setLoading(true)
        const response = await UserMembershipApi.getAllMembership()
        setMembershipList(response.data)    
      } catch (error) {
        console.log(error)
        toast.error('Lấy gói thành viên thất bại')    
      } finally {
        setLoading(false)
      }
    }
    fetchMemberships()
  }, [])
  return {
      membershipList,
      loading
  }
}