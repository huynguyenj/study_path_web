import { useState } from 'react'
import type { TaskType } from '../types/task-type'
import { ScheduleApi } from '../api/api.schedule'

export default function useGetTasksByCurrentDate() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [loading, setLoading] = useState(false)
  const getTaskByProcess = async (choiceProcessId: string) => {
    try {
      setLoading(true)
      const response = await ScheduleApi.getProcessTasks(choiceProcessId)
      setTasks(response.data.processTasks)
    } catch (error) {
      console.log(error)
      // toast.error('Lấy tasks của ngày này thất bại!')
    } finally {
      setLoading(false)
    }
  }
  return {
      tasks,
      loading,
      getTaskByProcess
  }
}
