import type { QuizType } from '../types/quiz-type'
import QuizCard from './QuizCard'

type QuizSectionProps = {
  quizList: QuizType[]
}

export default function QuizSection({ quizList }: QuizSectionProps) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
      {quizList.map((quiz) => (
        <QuizCard key={quiz.id} data={quiz}/>
      ))}
    </div>
  )
}
