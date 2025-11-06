import QuizSection from '@/features/user-quizzes/components/QuizSection'
import { QuizContextProvider } from '@/features/user-quizzes/context/QuizContextProvider'


export default function QuizPage() {
  
  return (
    <QuizContextProvider>
      <QuizSection/>
    </QuizContextProvider>
  )
}
