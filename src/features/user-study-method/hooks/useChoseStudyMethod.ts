import type { LoginResponse } from '@/features/auth/types/login-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useState } from 'react'
import { toast } from 'react-toastify'
import type { StudyMethodSubmit } from '../types/study-type'
import { StudyMethodApi } from '../api/api.study.method'
import usePersonalStudyMethodContext from './usePersonalStudyMethodContext'

export default function useChoseStudyMethod() {
  const { getItem } = useLocalStorage('user-info')
  const [isLoading, setIsLoading] = useState(false)
  const context = usePersonalStudyMethodContext()
  const handleSubmitStudyMethod = async (methodId: string) => {
      const userId = getItem<LoginResponse>()?.userId
      if (!userId) {
        toast.error('Thất bại!')
        return
      }
      try {
        setIsLoading(true)
        const data: StudyMethodSubmit = {
            isDeleted: false,
            methodId: methodId,
            userId: userId
        }    
        await StudyMethodApi.chooseStudyMethod(data)
        context.getPersonalStudyMethod()
      } catch (error) {
        toast.error(error as string)
      } finally {
        setIsLoading(false)
      }
  }
  return {
      handleSubmitStudyMethod,
      isLoading
  }
}
