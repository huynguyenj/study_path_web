import { useState } from 'react'
import type { QuizType } from '../types/quiz-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { QuizApi } from '../api/api.quiz'
import { type PaginationResponse } from '@/types/data-response/response'

export default function useGetListQuiz(page: number) {
  const [quizList, setQuizList] = useState<PaginationResponse<QuizType>>()
  const { getItem } = useLocalStorage('user-info')
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //       getListQuizData()
  // }, [page])
  const getListQuizData = async () => {
         const userId = getItem<LoginResponse>()?.userId
         if (!userId) {
            toast.error('Hãy đăng nhập để dùng chức năng')
            return
         }
         try {
           setLoading(true)
           const response = await QuizApi.getAllUserQuiz(userId, page, 5) 
           setQuizList(response.data)
         } catch (error) {
            console.log(error)
         } finally {
           setLoading(false) 
         }
      }
  return {
      quizList,
      loading,
      getListQuizData
  }
}
