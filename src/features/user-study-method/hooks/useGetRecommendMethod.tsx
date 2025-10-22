import { useState } from 'react'
import type { AnswerType } from '../types/answer-type'
import { StudyMethodApi } from '../api/api.study.method'
import { toast } from 'react-toastify'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { useAppDispatch } from '@/hooks/redux/redux-hooks'
import { saveStudyMethodLists } from '../slice/method-slice'

export default function useGetRecommendMethod() {
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  const dispatch = useAppDispatch()
  const getStudyMethodRecommend = async (answerData?: AnswerType[]) => {
    const userId = getItem<LoginResponse>()?.userId
    if (!answerData || !userId) {
      toast.error('Please complete evaluation!')
      return
    }
    try {
      setLoading(true)
      await StudyMethodApi.submitEvaluation(answerData)
      toast.success('Submit answer success!')
      const response = await StudyMethodApi.getTopThreeStudyMethod(userId)
      dispatch(saveStudyMethodLists(response.data))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return { getStudyMethodRecommend, loading }
}
