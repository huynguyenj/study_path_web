import { useEffect, useState } from 'react'
import type { QuizTestType } from '../types/quiz-test-type'
import { quizDataList } from '../testDummyData'

type UseTestQuizProps = {
      quizId: string | number | undefined
}

export default function useTestQuiz({ quizId }: UseTestQuizProps) {
  const [quizData, setQuizData] = useState<QuizTestType>()
  useEffect(() => {
    if (quizId) {
      setQuizData(quizDataList)
    }
  }, [quizId])
  return { quizData }
}
