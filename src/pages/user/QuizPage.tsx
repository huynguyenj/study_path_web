import QuizHeader from '@/features/user-quizzes/components/QuizHeader'
import QuizSection from '@/features/user-quizzes/components/QuizSection'
import QuizStatistic from '@/features/user-quizzes/components/QuizStatistic'

export default function QuizPage() {
  return (
    <div>
      <QuizHeader/>
      <QuizStatistic/>
      <QuizSection/>
    </div>
  )
}
