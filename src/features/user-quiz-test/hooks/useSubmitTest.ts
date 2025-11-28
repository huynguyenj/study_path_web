import { PRIVATE_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'
import type { QuizAnswerType } from '../types/quiz-answer-type'
import { useState } from 'react'
import { QuizTestApi } from '../api/api.quiz-test'
import { toast } from 'react-toastify'

export default function useSubmitTest() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const submitTest = async (data: QuizAnswerType) => {
     try {
       setLoading(true)
       const response = await QuizTestApi.submitQuizAnswer(data)
       toast.success('Submit thành công!')
       navigate(PRIVATE_PATH.TEST.RESULT_QUIZ.replace(':id', response.data.id as string))
     } catch (error) {
       toast.error(error as string)
     } finally {
      setLoading(false)
     }
  }
  return {
      submitTest,
      loading
    }
}
