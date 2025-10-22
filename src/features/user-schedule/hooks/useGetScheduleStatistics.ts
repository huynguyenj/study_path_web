import { useState } from 'react'
import { toast } from 'react-toastify'
import type { ScheduleStatisticResponse } from '../types/statistic-type'
import { ScheduleApi } from '../api/api.schedule'
import useGetScheduleDetail from './useGetScheduleDetail'

export default function useGetScheduleStatistics() {
  const [scheduleStatistic, setScheduleStatistic] = useState<ScheduleStatisticResponse>()
  const { getScheduleDetail, scheduleDetail } = useGetScheduleDetail()
  const [loading, setLoading] = useState(false)
  const getScheduleStatistic = async (scheduleId: string) => {
    try {
      setLoading(true)
      const response = await ScheduleApi.getScheduleStatistic(scheduleId)
      setScheduleStatistic(response.data)
      await getScheduleDetail(scheduleId)
      toast.success('Lấy thông số của lịch thành công!')
    } catch (error) {
      console.log(error)      
    } finally {
      setLoading(false)
    }
  }
  return {
      getScheduleStatistic,
      scheduleDetail,
      scheduleStatistic,
      loading
  }
}
