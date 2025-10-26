import { apiPrivate } from '@/services/config/axios.config'
import type { QuestionSectionType } from '../types/question-type'
import type { ResponseStructure } from '@/types/data-response/response'
import type { StudyMethodComparisonType, StudyMethodSubmit, StudyMethodType } from '../types/study-type'
import type { AnswerType } from '../types/answer-type'
import type { StudyMethodPersonalType } from '../types/study-method-types'

export const StudyMethodApi = {
  getPersonalStudyMethod: async (userId: string): Promise<ResponseStructure<StudyMethodPersonalType>> => await apiPrivate.get(`/StudyMethod/get-study-method-by/${userId}`),
  getStudyMethodDetail: async (studyMethodId: string): Promise<ResponseStructure<StudyMethodType>> => await apiPrivate.get(`/Method/get-by/${studyMethodId}`),
  getAllEvaluation: async (): Promise<ResponseStructure<QuestionSectionType[]>> => await apiPrivate.get('/Evaluation/get-all'),
  submitEvaluation: async (answerData: AnswerType[]): Promise<ResponseStructure<StudyMethodComparisonType[]>> => await apiPrivate.post('/UserAnswer/submit', answerData),
  getTopThreeStudyMethod: async(userId: string): Promise<ResponseStructure<StudyMethodType[]>> => await apiPrivate.get(`Method/top3/${userId}`),
  chooseStudyMethod: async (studyMethodSubmission: StudyMethodSubmit): Promise<null> => await apiPrivate.post('/StudyMethod/create', studyMethodSubmission),
  deletePersonalStudyMethod: async (studyMethodId: string): Promise<null> => await apiPrivate.delete(`/${studyMethodId}`)
}