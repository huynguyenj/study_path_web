import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import { useState, type ChangeEvent } from 'react'
import type { CreateTaskType, TaskType } from '../types/task-type'
import { toast } from 'react-toastify'
import { ScheduleApi } from '../api/api.schedule'

export default function useCreateTask(processId: string) {
  const { errors, validate: isValid } = useFormCheck<CreateTaskType>()
  const [tasks, setTasks] = useState<TaskType[]>()
  const [loading, setLoading] = useState(false)
  const handleSubmitTask = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const hours = Number(form.get('hours'))
      const minutes = Number(form.get('minutes'))
      const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`
      const data: CreateTaskType = {
            title: form.get('title') as string,
            description: form.get('description') as string,
            amount: Number(form.get('amount')),
            startTime: time
      }
      // console.log(data)
      if (isValid(data, { title: '', description: '' })) {
            try {
              setLoading(true)
              const response = await ScheduleApi.createTaskByAi(processId, data)
              setTasks(response.data.processTasks)
              toast.success('Tạo task thành công')
            } catch (error) {
              toast.error(error as string)
            } finally {
              setLoading(false)
            }
      }
  }
  return {
      handleSubmitTask,
      tasks,
      loading,
      errors
  }
}
