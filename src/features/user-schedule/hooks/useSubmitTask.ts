import { useState } from 'react'
import { ScheduleApi } from '../api/api.schedule'
import { toast } from 'react-toastify'

export default function useSubmitTask() {
  const [loading, setLoading] = useState(false)
  const handleCompleteTask = async (taskId: string) => {
      try {
        setLoading(true)
        await ScheduleApi.submitCompleteTask(taskId)
        toast.success('Hoàn thành task thành công')    
      } catch (error) {
        console.log(error)
        toast.error('Hoàn thành task thất bại.')    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleCompleteTask,
      loading
  }
}
