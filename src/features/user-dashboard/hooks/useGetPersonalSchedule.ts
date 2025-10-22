import { useEffect, useState } from 'react'
import { UserDashboardApi } from '../api/api.user.dashboard'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { type ScheduleResponse } from '@/features/user-schedule/types/schedule-type'

export default function useGetPersonalSchedule() {
  const [personalScheduleList, setPersonalScheduleList] = useState<ScheduleResponse[]>([])
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  useEffect(() => {
    const getPersonalList = async () => {
      const userId = getItem<LoginResponse>()?.userId
      if (!userId) {
        toast.error('Hãy đăng nhập để thực hiện thao tác')
        return
      }
      try {
        setLoading(true)    
        const response = await UserDashboardApi.getAllPersonalSchedule(userId)
        setPersonalScheduleList(response.data)
      } catch (error) {
       console.log(error)           
      } finally {
        setLoading(false)
      }
    }
    getPersonalList()
  }, [])   
  return {
      loading,
      personalScheduleList
  }
}
