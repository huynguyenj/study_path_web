export type AnswerType = {
  questionId: string
  choiceId: string  
}
export type QuizAnswerType = {
  start_at: Date
  end_at: Date
  answer: AnswerType[]
}