import { createContext, useCallback, useState, type PropsWithChildren } from 'react'
import type { AnswerType } from '../types/quiz-answer-type'

type QuizAnswerContextProps = {
  choices: AnswerType[]
  handleChoice: (questionId: string, choiceId: string) => void
}

const QuizAnswerContext = createContext<QuizAnswerContextProps | undefined>(undefined)

type QuizAnswerProviderProps = PropsWithChildren
export function QuizAnswerProvider({ children }: QuizAnswerProviderProps) {
  const [choices, setChoices] = useState<AnswerType[]>([])
  const handleChoice = useCallback((questionId: string, choiceId: string) => {
    setChoices(prev => {
      const updated = prev.filter(question => question.questionId != questionId)
      return [...updated, { questionId: questionId, choiceId: choiceId }]
    })
  }, [])
  console.log(choices)
  return (
    <QuizAnswerContext.Provider value={{ handleChoice, choices }}>
      {children}
    </QuizAnswerContext.Provider>
  )
}

export default QuizAnswerContext