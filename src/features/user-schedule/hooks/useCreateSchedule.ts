import { useCallback, useState } from 'react'
import type { CreateScheduleType } from '../types/schedule-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { ScheduleApi } from '../api/api.schedule'

export default function useCreateSchedule() {
  const [isLoading, setIsLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  const handleSubmitSchedule = useCallback(async (scheduleData: CreateScheduleType) => {
    const userId = getItem<LoginResponse>()?.userId
    if (!userId) {
      toast.error('Tạo lịch thất bại xin hãy đăng nhập để thử lại!')
      return
    }
    try {
      setIsLoading(true)
      await ScheduleApi.createSchedule(userId, scheduleData)
      toast.success('Tạo lịch thành công!')      
    } catch (error) {
      toast.error(error as string)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { handleSubmitSchedule, isLoading }
}
