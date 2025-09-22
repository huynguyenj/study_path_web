import { quizDataList } from '../quizData'
import QuizCard from './QuizCard'

export default function QuizSection() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
      {quizDataList.map((quiz) => (
        <QuizCard key={quiz.id} data={quiz}/>
      ))}
    </div>
  )
}
