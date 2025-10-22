import { useEffect, useState } from 'react'
import type { ScheduleResponse } from '../types/schedule-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { type LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { ScheduleApi } from '../api/api.schedule'

export default function useGetAllScheduleOfUser() {
  const [scheduleList, setScheduleList] = useState<ScheduleResponse[]>([])
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  useEffect(() => {
    getScheduleList()
  }, [])
  const getScheduleList = async () => {
      const userId = getItem<LoginResponse>()?.userId
      if (!userId) {
        toast.error('Lấy dữ liệu schedule thất bại hãy đăng nhập để thử lại')
        return
      }
      try {
        setLoading(true)    
        const response = await ScheduleApi.getAllScheduleByUser(userId)
        setScheduleList(response.data)                
      } catch (error) {
        console.log(error)    
      } finally {
        setLoading(false)     
      }
  }
   return {
      scheduleList,
      loading,
      getScheduleList
   }
}
