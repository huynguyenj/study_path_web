import { useCallback } from 'react'
import type { CreateScheduleType } from '../types/schedule-type'

export default function useCreateSchedule() {
  const handleSubmitSchedule = useCallback(async (scheduleData: CreateScheduleType) => {
      console.log(scheduleData)
  }, [])
  return { handleSubmitSchedule }
}
