import { createContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { methodQuestion } from '../dummyData'
import type { QuestionSectionType } from '../types/question-type'
import type { AnswerType, MultipleChoice, SingleChoice } from '../types/answer-type'

type StudyMethodContextProps = {
      questionIndexPage: QuestionSectionType
      questionSectionList: QuestionSectionType[]
      goToNextPage: () => void
      goBackPage: () => void
      handleChoice: (choiceId: string, questionId: string, typeQuestion: string) => void
      handleSubmit: () => void
      choices: SingleChoice[]
      multipleChoices: MultipleChoice[]
      page: number
      limit: number
}

const StudyMethodContext = createContext<StudyMethodContextProps | undefined>(undefined)

type StudyMethodProviderProps = PropsWithChildren

export function StudyMethodProvider({ children }: StudyMethodProviderProps) {
  const [questionSectionList] = useState<QuestionSectionType[]>(methodQuestion)
  const [page, setPage] = useState(1)
  const [questionIndexPage, setQuestionIndexPage] = useState<QuestionSectionType>(questionSectionList[0])
  const [choices, setChoices] = useState<SingleChoice[]>([])
  const [multipleChoices, setMultipleChoices] = useState<MultipleChoice[]>([])
  const [answer, setAnswer] = useState<AnswerType[]>([])
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
      const dataIndex = previousPage - 1
      if (previousPage > 0) {
            setPage(previousPage)
            setQuestionIndexPage(questionSectionList[dataIndex])
      }
  }

    const handleChoice = (choiceId: string, questionId: string, typeQuestion: string) => {
      if (typeQuestion == 'single') {
         setChoices((prev) => {
          const updated = prev.filter(item => item.id !== questionId)
          return [...updated, { id: questionId, choiceId }]
      })
      } else {
          setMultipleChoices((prev) => {
            const previousQuestions = prev.filter((item) => item.id !== questionId)
            const currentQuestion = prev.find((item) => item.id === questionId)
            const listChoices = currentQuestion ? [...currentQuestion.choiceId.filter(choice => choice != choiceId), choiceId] : [choiceId]
            return [...previousQuestions, { id: questionId, choiceId: listChoices }]
      })
      }
    }
    useEffect(() => {
      setAnswer((prev) => {
        const previousEvaluation = prev.filter((item) => item.evaluationId !== questionIndexPage.id)
        const listChoices = [...choices, ...multipleChoices]
        const list: (SingleChoice | MultipleChoice)[] = []
         questionIndexPage.question.map((item) => {
          const choice = listChoices.find((question) => question.id === item.id)
          return choice && list.push(choice) 
        })
        return [...previousEvaluation, { evaluationId: questionIndexPage.id, question: [...list] }]
      })
    }, [choices, multipleChoices])

    const handleSubmit = () => {
      console.log(answer)
    }
  return (
    <StudyMethodContext.Provider value={{ page, questionSectionList, limit, questionIndexPage, goToNextPage, goBackPage, handleChoice, choices, multipleChoices, handleSubmit }}>
      {children}
    </StudyMethodContext.Provider>
  )
}

export default StudyMethodContext