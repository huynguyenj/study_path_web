import { PRIVATE_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'
import type { QuizAnswerType } from '../types/quiz-answer-type'

export default function useSubmitTest() {
  const navigate = useNavigate()
  const submitTest = (data: QuizAnswerType) => {
      console.log(data)
      navigate(PRIVATE_PATH.TEST.RESULT_QUIZ)
  }
  return {
      submitTest
    }
}
