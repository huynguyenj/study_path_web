import { apiPrivate } from '@/services/config/axios.config'

export const QuizTestResultApi = {
   getQuizResult: async (submitId: string) => await apiPrivate.get(`/UserQuizAttempt/get-by/${submitId}`) 
}