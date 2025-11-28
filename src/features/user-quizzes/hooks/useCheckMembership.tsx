import useAuth from '@/features/auth/hooks/useAuth'
import { UserMembershipApi } from '@/features/user-membership/api/api.membership'
import { useEffect, useState } from 'react'

export default function useCheckMembership() {
  const { userId } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  useEffect(() => {
      const checkMembershipStatus = async () => {
        if (!userId) return
        try {
           setIsLoading(true)
           const data = await UserMembershipApi.checkMembership(userId) 
           setIsSubscribed(data.data.isSubScription)
        } catch (error) {
            console.error('Error checking membership status:', error)  
        } finally {
           setIsLoading(false)
        }
      }
      checkMembershipStatus()
  }, [userId])
  return {
      isLoading,
      isSubscribed
  }
}
