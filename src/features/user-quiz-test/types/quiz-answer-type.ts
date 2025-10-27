export type AnswerType = {
  questionId: string
  questionChoiceId: string  
}
export type QuizAnswerType = {
  quizId: string
  startAt: string
  finishAt: string
  answerList: AnswerType[]
}

export interface QuizAnswerResult extends QuizAnswerType {
  id: string
}