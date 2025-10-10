import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import { type ChangeEvent } from 'react'
import type { CreateTaskType } from '../types/task-type'
import { toast } from 'react-toastify'

export default function useCreateTask() {
  const { errors, validate: isValid } = useFormCheck<CreateTaskType>()
  const handleSubmitTask = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const data: CreateTaskType = {
            title: form.get('title') as string,
            description: form.get('description') as string,
            amount: Number(form.get('amount'))
      }
      if (isValid(data, { title: '', description: '' })) {
            console.log('submitted')
            toast.success('Tạo task thành công')
      }
  }
  return {
      handleSubmitTask,
      errors
  }
}
