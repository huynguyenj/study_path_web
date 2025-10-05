export type SingleChoice = {
  id: string,
  choiceId: string
}

export type MultipleChoice = {
  id: string,
  choiceId: string[]
}
export type AnswerType = {
  evaluationId: string
  question: (SingleChoice | MultipleChoice)[]
}
