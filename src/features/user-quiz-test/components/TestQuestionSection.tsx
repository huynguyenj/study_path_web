import PaginationSimple from '@/components/pagination/PaginationSimple'
import { useEffect, useMemo } from 'react'
import QuestionSection from './QuestionSection'
import usePagination from '@/hooks/pagination/usePagination'
import type { QuizQuestionType } from '@/features/user-quizzes/types/quiz-type'

type TestQuestionSectionProps = {
  questions: QuizQuestionType[]
}

export default function TestQuestionSection({ questions }: TestQuestionSectionProps) {
  const { currentPage, goBackPage, goToNextPage, totalPages, setTotalPages } = usePagination()
  useEffect(() => {
    setTotalPages(questions.length)
  }, [questions])

  const currentQuestion = useMemo(() => {
    return questions[currentPage - 1]
  }, [currentPage, questions])
  
  return (
    <div className='flex gap-2 mt-2 bg-[#f8f9fa] w-[60%] mx-auto rounded-t-2xl shadow-[10px_8px_0px_0px_rgba(0,0,0,0.3)]'>
      <div className='w-full'>
        <div className='flex flex-col gap-5'>
          <QuestionSection question={currentQuestion} />
          <div className='py-5 px-5'>
            <PaginationSimple currentPage={currentPage} limit={totalPages} goBackPage={goBackPage} goToNextPage={goToNextPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}
