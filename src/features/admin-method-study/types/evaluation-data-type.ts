export type EvaluationDataType = {
      id: string
      name: string
      description: string
      totalQuestion: number
      isDeleted: boolean
}

export type MethodRuleCondition = {
  id: string
  weight: number
  effectiveness: number
  evaluationId: string
  evaluationQuestionId: string
  choiceId: string
  methodRules: {
      id: string
      methodId: string
      methodRuleConditionId: string
  }[]
}
export interface EvaluationQuestionChoices extends Omit<EvaluationDataType, 'totalQuestion' | 'isDeleted' | 'name'> {
      title: string
      evaluationQuestionId: string
      methodRuleConditions: MethodRuleCondition[]
}
export interface EvaluationQuestionType extends Omit<EvaluationDataType, 'totalQuestion' | 'isDeleted' | 'name'> {
  title: string
  type: string
  evaluationId: string
  choices: EvaluationQuestionChoices[]
}


export type CreateEvaluation = Omit<EvaluationDataType, 'id' | 'totalQuestion'>
export type UpdateEvaluation = Omit<CreateEvaluation, 'isDeleted'>
export interface EvaluationDetailType extends Omit<EvaluationDataType, 'totalQuestion'> {
   evaluationQuestions: EvaluationQuestionType[]
}