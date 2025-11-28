import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import type { CreateMethodDataType } from '../types/method-data-types'
import { useState, type ChangeEvent } from 'react'
import { StudyMethodAdmin } from '../api/api.study.method'
import { toast } from 'react-toastify'

export default function useCreateStudyMethod() {
  const { errors, validate: valid } = useFormCheck<CreateMethodDataType>()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const data: CreateMethodDataType = {
         name: form.get('name') as string,
         description: form.get('description') as string,
         difficulty: form.get('difficulty') as string,
         timeInfo: form.get('timeInfo') as string
      }
      if (valid(data, { name: '', description: '', difficulty: '', timeInfo: '' })) {
        try {
          setLoading(true)
          await StudyMethodAdmin.createStudyMethod(data)
          toast.success('Tạo phương pháp học thành công!')  
        } catch (error) {
          toast.error(error as string)
        } finally {
          setLoading(false)
        }
      }
  }
  return {
      loading,
      errors,
      handleSubmit
  }
}
