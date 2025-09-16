import { createContext, useMemo, useState, type PropsWithChildren } from 'react'
import { methodQuestion } from '../dummyData'
import type { QuestionSectionType } from '../types/question-type'

type StudyMethodContextProps = {
      questionIndexPage: QuestionSectionType
      questionSectionList: QuestionSectionType[]
      goToNextPage: () => void
      goBackPage: () => void
      page: number
      limit: number
}

const StudyMethodContext = createContext<StudyMethodContextProps | undefined>(undefined)

type StudyMethodProviderProps = PropsWithChildren

export function StudyMethodProvider({ children }: StudyMethodProviderProps) {
  const [questionSectionList] = useState<QuestionSectionType[]>(methodQuestion)
  const [page, setPage] = useState(1)
  const [questionIndexPage, setQuestionIndexPage] = useState<QuestionSectionType>(questionSectionList[0])
  const limit = useMemo(() => {
    return questionSectionList.length
  }, [questionSectionList])
  const goToNextPage = () => {
      const nextPage = page + 1
      const dataIndex = nextPage - 1
      if (nextPage <= limit) {
            setPage(nextPage)
            setQuestionIndexPage(questionSectionList[dataIndex])
      }
  }
  const goBackPage = () => {
      const previousPage = page - 1
      if (previousPage > 0) {
            setPage(previousPage)
            setQuestionIndexPage(questionSectionList[previousPage])
      }
  }
  return (
    <StudyMethodContext.Provider value={{ page, questionSectionList, limit, questionIndexPage, goToNextPage, goBackPage }}>
      {children}
    </StudyMethodContext.Provider>
  )
}

export default StudyMethodContext