import { useState } from 'react'
import { QuizApi } from '../api/api.quiz'
import { toast } from 'react-toastify'
import useQuizContext from './useQuizContext'

export default function useDeleteQuiz() {
  const [loading, setLoading] = useState(false)
  const context = useQuizContext()
  const handleDeleteQuiz = async (quizId: string) => {
      try {
        setLoading(true)
        await QuizApi.deleteQuiz(quizId)
        context.getListQuizData()    
      } catch (error) {
        console.log(error)
        toast.error('Xóa bài kiểm tra thất bại!')    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleDeleteQuiz,
      loading
  }
}
