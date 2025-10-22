export type Choice = {
  evaluationQuestionId: string,
  choiceId: string
}

// export type MultipleChoice = {
//   id: string,
//   choiceId: string[]
// }
export type AnswerType = {
  userId: string | null | undefined
  evaluationId: string
  questions: Choice[]
}
