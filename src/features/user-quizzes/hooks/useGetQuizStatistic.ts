import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { QuizApi } from '../api/api.quiz'
import type { QuizStatisticType } from '../types/quiz-statistic'

export default function useGetQuizStatistic() {
  const [quizStatistic, setQuizStatistic] = useState<QuizStatisticType>()
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  useEffect(() => {
     const getQuizStatisticData = async () => {
       const userId = getItem<LoginResponse>()?.userId
       if (!userId) {
         toast.error('Lỗi trong việc lấy dữ liệu của quiz. Hãy đăng nhập để thử lại.')
         return
       }
       try {
         setLoading(true)
         const response = await QuizApi.getQuizStatistic(userId)
         setQuizStatistic(response.data)   
       } catch (error) {
         console.log(error)
       } finally {
         setLoading(false)
       }
     } 
     getQuizStatisticData()
  }, [])
  return {
      quizStatistic,
      loading
  }
}
