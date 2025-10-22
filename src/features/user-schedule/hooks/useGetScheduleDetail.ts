import { useState } from 'react'
import { ScheduleApi } from '../api/api.schedule'
import type { ScheduleResponse } from '../types/schedule-type'

export default function useGetScheduleDetail() {
  const [scheduleDetail, setScheduleDetail] = useState<ScheduleResponse>()
  const [loading, setLoading] = useState(false)
  const getScheduleDetail = async (scheduleId: string) => {
    try {
      setLoading(true)
      const response = await ScheduleApi.getScheduleDetail(scheduleId)
      setScheduleDetail(response.data)
    } catch (error) {
      console.log(error)      
    } finally {
      setLoading(false)
    }
  }
  return {
      getScheduleDetail,
      scheduleDetail,
      loading
  }
}
