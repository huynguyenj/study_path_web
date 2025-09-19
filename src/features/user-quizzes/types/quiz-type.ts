export type QuizType = {
      id: string | number
      name: string
      description: string
      total_question: number
      time: number,
      type: 'easy' | 'hard' | 'medium'
      total_points: number
      pass_score: number
}