type CommonQuestionType = {
      id: string
      name: string
      title: string
      description: string
      type: string
}

type ChoiceType = Omit<CommonQuestionType, 'type'>
type QuestionType = Omit<CommonQuestionType, 'description'> & {
      choices: ChoiceType[]
}

export type QuestionSectionType = Omit<CommonQuestionType, 'type'| 'title'> & {
      evaluationQuestions: QuestionType[]
}

