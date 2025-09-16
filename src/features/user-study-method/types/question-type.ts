type CommonQuestionType = {
      id: string | number
      title: string
      description: string
      type: string
}

type ChoiceType = Omit<CommonQuestionType, 'type'>
type QuestionType = Omit<CommonQuestionType, 'description'> & {
      choices: ChoiceType[]
}

export type QuestionSectionType = Omit<CommonQuestionType, 'type'> & {
      question: QuestionType[]
}

