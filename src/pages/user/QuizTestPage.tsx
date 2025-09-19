import TestHeader from '@/features/user-quiz-test/components/TestHeader'
import TestQuestionSection from '@/features/user-quiz-test/components/TestQuestionSection'
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
          <TestHeader quizInfo={quizData}/>
          <TestQuestionSection questions={quizData.questions}/>
        </>
        :
        <p>Not find data</p>
      }
    </div>
  )
}
