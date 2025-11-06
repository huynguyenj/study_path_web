import useContextCheck from '@/hooks/context/useContextCheck'
import QuizContext from '../context/QuizContextProvider'

export default function useQuizContext() {
  return useContextCheck({ context: QuizContext, contextName: 'Quiz context' })
}
