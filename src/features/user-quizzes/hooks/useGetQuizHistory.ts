import { useEffect, useState } from 'react'
import type { QuizHistoryType } from '../types/quiz-history'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { type LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { QuizApi } from '../api/api.quiz'
import { type PaginationResponse } from '@/types/data-response/response'

export default function useGetQuizHistory(page:number) {
  const [quizHistory, setQuizHistory] = useState<PaginationResponse<QuizHistoryType>>()
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  
  const getQuizHistoryData = async () => {
    const userId = getItem<LoginResponse>()?.userId
    if (!userId) {
      toast.error('Lấy lịch sử quiz thất bại. Hãy đăng nhập')
      return
    }
    try {
      setLoading(true)
      const response = await QuizApi.getQuizHistory(userId, page, 5)
      setQuizHistory(response.data)
    } catch (error) {
      console.log(error)
      toast.error('Lấy lịch sử quiz thất bại')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getQuizHistoryData()
  }, [])
  return { quizHistory, loading }
}