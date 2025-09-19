import type { QuizType } from '@/features/user-quizzes/types/quiz-type'

export type ChoiceType = {
      id: string | number
      name: string
}

export type QuestionType = {
      id: string | number
      name: string
      description?: string
      point: number
      choices: ChoiceType[]
}

export type QuizTestType = Omit<QuizType, 'description' | 'total_points'|'pass_score'> & {
      questions: QuestionType[]
}