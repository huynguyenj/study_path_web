export type QuizType = {
      id: string
      name: string
      description: string
      totalQuestion: number
      time: string,
      type: string
      totalPoints: number
      passScore: number
}

export type QuizQuestionChoiceType = {
  id: string
  name: string
  isCorrect: boolean
}

export type QuizQuestionType = {
  id: string
  name: string
  description: string
  point: string
  questionChoices: QuizQuestionChoiceType[]
} 

export interface CreateQuizType extends Omit<QuizType, 'id'> {
      userId: string
}

export interface QuizDetailType extends QuizType {
  questions: QuizQuestionType[]
}
