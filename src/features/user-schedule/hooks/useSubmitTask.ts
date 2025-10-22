import { ScheduleApi } from '../api/api.schedule'
import { toast } from 'react-toastify'

export default function useSubmitTask() {
  const handleCompleteTask = async (taskId: string) => {
      try {
        await ScheduleApi.submitCompleteTask(taskId)
        toast.success('Hoàn thành task thành công')    
      } catch (error) {
        console.log(error)
        toast.error('Hoàn thành task thất bại.')    
      }
  }
  return {
      handleCompleteTask
  }
}
