import type { LoginResponse } from '@/features/auth/types/login-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useState } from 'react'
import { toast } from 'react-toastify'
import type { StudyMethodSubmit } from '../types/study-type'
import { StudyMethodApi } from '../api/api.study.method'

export default function useChoseStudyMethod() {
  const { getItem } = useLocalStorage('user-info')
  const [isLoading, setIsLoading] = useState(false)
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
      } catch (error) {
        console.log(error)
        toast.error('Đã xảy ra lỗi. Vui lòng thử lại!')
      } finally {
        setIsLoading(false)
      }
  }
  return {
      handleSubmitStudyMethod,
      isLoading
  }
}
