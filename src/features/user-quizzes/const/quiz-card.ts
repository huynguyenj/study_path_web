type DifficultTypes = 'hard' | 'medium' | 'easy'
type ColorTypes = 'success' | 'danger' | 'yellow'
export const TagRuleQuiz: Record<DifficultTypes, ColorTypes> = {
      easy: 'success',
      medium: 'yellow',
      hard: 'danger'
}