import { apiPrivate } from '@/services/config/axios.config'
import type { CreateQuizType, QuizDetailType, QuizType } from '../types/quiz-type'
import type { PaginationResponse, ResponseStructure } from '@/types/data-response/response'
import type { QuizHistoryType } from '../types/quiz-history'
import type { QuizStatisticType } from '../types/quiz-statistic'

export const QuizApi = {
   getQuizStatistic: async (userId: string): Promise<ResponseStructure<QuizStatisticType>> => await apiPrivate.get(`/Quiz/user/${userId}/info`),
   createQuizByAi: async (quizData: CreateQuizType): Promise<ResponseStructure<CreateQuizType>> => await apiPrivate.post('/Gemini/quiz/generate', quizData),
   getAllUserQuiz: async (userId: string, page?: number, limit?:number): Promise<ResponseStructure<PaginationResponse<QuizType>>> => await apiPrivate.get(`/Quiz/paging-by-user/${userId}?pageNumber=${page}&pageSize=${limit}`),
   getQuizDetail: async (quizId: string): Promise<ResponseStructure<QuizDetailType>> => await apiPrivate.get(`/Quiz/get-by/${quizId}`),
   deleteQuiz: async (quizId: string): Promise<null> => await apiPrivate.delete(`/Quiz/delete-by/${quizId}`),
   updateQuiz: async (quizId: string, updatedData: QuizType): Promise<ResponseStructure<QuizType>> => await apiPrivate.put(`/Quiz/update-by/${quizId}`, updatedData),
   getQuizAttempt: async (userId: string, page?: number, limit?:number): Promise<ResponseStructure<PaginationResponse<QuizHistoryType>>> => await apiPrivate.get(`/UserQuizAttempt/user/${userId}?pageNumber=${page}&pageSize=${limit}`),
   getQuizHistory: async (userId: string, page?:number, limit?: number): Promise<ResponseStructure<PaginationResponse<QuizHistoryType>>> => await apiPrivate.get(`/UserQuizAttempt/user/${userId}?pageNumber=${page}&pageSize=${limit}`)
}