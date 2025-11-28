import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { QuizApi } from '@/features/user-quizzes/api/api.quiz'
import type { QuizDetailType } from '@/features/user-quizzes/types/quiz-type'

type UseTestQuizProps = {
      quizId: string | undefined
}

export default function useTestQuiz({ quizId }: UseTestQuizProps) {
  const [quizData, setQuizData] = useState<QuizDetailType>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getQuizData = async () => {
      if (!quizId) {
        toast.error('Lấy thông tin quiz thất bại. Hãy thử lại')
        return
      }
      try {
      setLoading(true)
      const response = await QuizApi.getQuizDetail(quizId)
      setQuizData(response.data)
    } catch (error) {
      toast.error(error as string)
    } finally {
      setLoading(false)
    }
    }
    getQuizData()
  }, [quizId])
  return { quizData, loading }
}
