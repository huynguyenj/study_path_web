import { useEffect, useState } from 'react'
import { quizHistoryData } from '../quizHistoty'
import type { QuizHistoryType } from '../types/quiz-history'

export default function useGetQuizHistory() {
  const [quizHistory, setQuizHistory] = useState<QuizHistoryType[]>()
  useEffect(() => {
    setQuizHistory(quizHistoryData)
  }, [])
  return { quizHistory }
}