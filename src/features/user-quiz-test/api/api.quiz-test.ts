import type { QuizAnswerResult, QuizAnswerType } from '@/features/user-quiz-test/types/quiz-answer-type'
import { apiPrivate } from '@/services/config/axios.config'
import type { ResponseStructure } from '@/types/data-response/response'

export const QuizTestApi = {
   submitQuizAnswer: async (submission: QuizAnswerType): Promise<ResponseStructure<QuizAnswerResult>> => await apiPrivate.post('/UserQuizAttempt/submit', submission) 
}