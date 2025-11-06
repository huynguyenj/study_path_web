import usePagination from '@/hooks/pagination/usePagination'
import useGetListQuiz from '../hooks/useGetListQuiz'
import type { PaginationResponse } from '@/types/data-response/response'
import type { QuizType } from '../types/quiz-type'
import { createContext, useEffect, type PropsWithChildren } from 'react'

type QuizContextProps = {
  currentPage: number
  totalPages: number
  loading: boolean
  quizList: PaginationResponse<QuizType> | undefined
  goBackPage: () => void
  goToNextPage: () => void
  getListQuizData: () => void
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined)

export function QuizContextProvider({ children }: PropsWithChildren) {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { getListQuizData, loading, quizList } = useGetListQuiz(currentPage)
  useEffect(() => {
      if (quizList) {
         setTotalPages(quizList.totalPages)
      }
  }, [quizList])
  return (
   <QuizContext.Provider value={{ currentPage, goBackPage, goToNextPage, getListQuizData, quizList, totalPages, loading }}>
      {children}
   </QuizContext.Provider>
  )
}

export default QuizContext