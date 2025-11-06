import { createContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import type { QuestionSectionType } from '../types/question-type'
import type { AnswerType, Choice } from '../types/answer-type'
import useGetEvaluationSections from '../hooks/useGetEvaluationSections'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

type StudyMethodContextProps = {
      questionIndexPage: QuestionSectionType | null
      evaluationList: QuestionSectionType[]
      goToNextPage: () => void
      goBackPage: () => void
      handleChoice: (choiceId: string, questionId: string, typeQuestion: string) => void
      fetchEvaluationList: () => void
      choices: Choice[]
      answer: AnswerType[]
      page: number
      limit: number
}

const StudyMethodContext = createContext<StudyMethodContextProps | undefined>(undefined)

type StudyMethodProviderProps = PropsWithChildren

export function StudyMethodProvider({ children }: StudyMethodProviderProps) {
  const { evaluationList, loading, fetchEvaluationList } = useGetEvaluationSections()
  const [page, setPage] = useState(1)
  const [questionIndexPage, setQuestionIndexPage] = useState<QuestionSectionType | null>(null)
  const [choices, setChoices] = useState<Choice[]>([])
  const [answer, setAnswer] = useState<AnswerType[]>([])
  const { getItem } = useLocalStorage('user-info')
  const userId = useMemo(() => {
     return getItem<LoginResponse>()?.userId
  }, [])
  const limit = useMemo(() => {
    return evaluationList.length
  }, [evaluationList])
  useEffect(() => {
     if (evaluationList.length > 0) {
      setQuestionIndexPage(evaluationList[0])
    }
  }, [evaluationList])
  

  const goToNextPage = () => {
      const nextPage = page + 1
      const dataIndex = nextPage - 1
      if (nextPage <= limit) {
            setPage(nextPage)
            setQuestionIndexPage(evaluationList[dataIndex])
      }
  }
  const goBackPage = () => {
      const previousPage = page - 1
      const dataIndex = previousPage - 1
      if (previousPage > 0) {
            setPage(previousPage)
            setQuestionIndexPage(evaluationList[dataIndex])
      }
  }

    const handleChoice = (choiceId: string, questionId: string, typeQuestion: string) => {
      if (typeQuestion.toLocaleLowerCase() === 'single') {
          setChoices((prevAnswer) => {
            const removeSimilarAnswerInQuestion = prevAnswer.filter(answer => answer.evaluationQuestionId != questionId)
            return [...removeSimilarAnswerInQuestion, { choiceId: choiceId, evaluationQuestionId: questionId }]
          })
      } else {
        setChoices((prevAnswer) => {
          return [...prevAnswer, { choiceId: choiceId, evaluationQuestionId: questionId }]
        })
      }
    }
    useEffect(() => {
      if (!questionIndexPage) return
      setAnswer((prevAnswerOfEvaluation) => {
        //Filter to get other evaluation section
        const otherEvaluation = prevAnswerOfEvaluation.filter(evaluation => evaluation.evaluationId !== questionIndexPage.id) 
        // List choices of current evaluation section
        const currentListAnswerOfEvaluation: Choice[] = []
        //Filter list choices of all evaluation and find the list choices that belong to current evaluation
        questionIndexPage.evaluationQuestions.map((question) => {
          const answerBelongToCurrentEvaluation = choices.find((answer) => answer.evaluationQuestionId === question.id)
          return answerBelongToCurrentEvaluation && currentListAnswerOfEvaluation.push(answerBelongToCurrentEvaluation)
        })
        return [...otherEvaluation, { evaluationId: questionIndexPage.id, userId: userId, questions: [...currentListAnswerOfEvaluation] }]
      })
    }, [choices])

    if (loading) {
      return <LoadingScreen/>
    }
  return (
    <StudyMethodContext.Provider value={{ answer, page, evaluationList, limit, questionIndexPage, goToNextPage, goBackPage, handleChoice, fetchEvaluationList, choices }}>
      {children}
    </StudyMethodContext.Provider>
  )
}

export default StudyMethodContext