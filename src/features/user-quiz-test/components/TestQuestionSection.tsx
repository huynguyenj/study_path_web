import PaginationSimple from '@/components/pagination/PaginationSimple'
import type { QuestionType } from '../types/quiz-test-type'
import TestSidebar from './TestSidebar'
import { useMemo } from 'react'
import QuestionSection from './QuestionSection'
import usePagination from '@/hooks/pagination/usePagination'

type TestQuestionSectionProps = {
  questions: QuestionType[]
}

export default function TestQuestionSection({ questions }: TestQuestionSectionProps) {
  const { currentPage, goBackPage, goToNextPage, limit } = usePagination({ limit: questions.length })
  const currentQuestion = useMemo(() => {
    return questions[currentPage - 1]
  }, [currentPage, questions])
  
  return (
    <div className='flex gap-2'>
      <TestSidebar numberOfQuestion={questions.length} currentIndexQuestion={currentPage - 1}/>
      <div className='w-full'>
        <div className='px-20 flex flex-col gap-5'>
          <QuestionSection question={currentQuestion} />
          <PaginationSimple currentPage={currentPage} limit={limit} goBackPage={goBackPage} goToNextPage={goToNextPage}/>
        </div>
      </div>
    </div>
  )
}
