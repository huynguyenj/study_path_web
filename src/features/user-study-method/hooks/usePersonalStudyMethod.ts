import { useEffect, useState } from 'react'
import type { StudyMethodType } from '../types/study-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { StudyMethodApi } from '../api/api.study.method'

export default function usePersonalStudyMethod() {
  const [personalStudyMethod, setPersonalStudyMethod] = useState<StudyMethodType>()
  const [studyMethodPersonalId, setStudyMethodPersonalId] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  
  useEffect(() => {
   getPersonalStudyMethod()
  }, [])

  const getPersonalStudyMethod = async () => {
    const userId = getItem<LoginResponse>()?.userId
    if (!userId) {
      toast.error('Hãy đăng nhập để thực hiện hành động.')
      return
    }
    try {
      setLoading(true)
      const response = await StudyMethodApi.getPersonalStudyMethod(userId)
      const responseStudyMethod = await StudyMethodApi.getStudyMethodDetail(response.data.methodId)
      setStudyMethodPersonalId(response.data.id)
      setPersonalStudyMethod(responseStudyMethod.data)
    } catch (error) {
      console.log(error)
      setPersonalStudyMethod(undefined)
    } finally {
      setLoading(false)
    }
  }
  return {
      loading,
      personalStudyMethod,
      getPersonalStudyMethod,
      studyMethodPersonalId
  }
}
