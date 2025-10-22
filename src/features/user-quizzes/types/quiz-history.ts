export type QuizHistoryType = {
      id: string
      quizName: string
      quizId: string
      finishAt: Date
      startDate: Date
      isPassed: boolean
      point: number
      accuracy: number
      totalQuestion: number
      totalPoints: number
      passScore: number
      completeAt: string
}