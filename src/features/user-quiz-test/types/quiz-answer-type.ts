export type AnswerType = {
  questionId: string
  questionChoiceId: string  
}
export type QuizAnswerType = {
  quizId: string
  startAt: Date
  finishAt: Date
  answerList: AnswerType[]
}

export interface QuizAnswerResult extends QuizAnswerType {
  id: string
}