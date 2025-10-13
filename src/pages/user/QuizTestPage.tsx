import TestHeader from '@/features/user-quiz-test/components/TestHeader'
import TestQuestionSection from '@/features/user-quiz-test/components/TestQuestionSection'
import { QuizAnswerProvider } from '@/features/user-quiz-test/context/QuizAnswerProvider'
import useTestQuiz from '@/features/user-quiz-test/hooks/useTestQuiz'
import { useParams } from 'react-router'

export default function QuizTestPage() {
  const { id } = useParams()
  const { quizData } = useTestQuiz({ quizId: id })
  return (
    <div className='px-5 py-5'>
      {
        quizData ?
        <>
        <QuizAnswerProvider>
          <TestHeader quizInfo={quizData} startTime={new Date()}/>
          <TestQuestionSection questions={quizData.questions}/>
        </QuizAnswerProvider>
        </>
        :
        <p>Not find data</p>
      }
    </div>
  )
}
