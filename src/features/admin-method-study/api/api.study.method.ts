import type { PaginationResponse, ResponseStructure } from '@/types/data-response/response'
import type { CreateMethodConsType, CreateMethodDataType, CreateMethodProType, MethodDataType, UpdateMethodDataType } from '../types/method-data-types'
import { apiPrivate } from '@/services/config/axios.config'
import type { CreateEvaluation, EvaluationDataType, EvaluationDetailType, UpdateEvaluation } from '../types/evaluation-data-type'

export const StudyMethodAdmin = {
    createStudyMethod: async (createdData: CreateMethodDataType): Promise<ResponseStructure<MethodDataType>> => await apiPrivate.post('/Method/create', createdData),
    createStudyMethodCon: async (createdData: CreateMethodConsType): Promise<null> => await apiPrivate.post('/MethodCon/create', createdData),
    createStudyMethodPro: async (createdData: CreateMethodProType): Promise<null> => await apiPrivate.post('/MethodPro/create', createdData),
    getAllStudyMethod: async (pageNumber: number, pageSize: number): Promise<ResponseStructure<PaginationResponse<MethodDataType>>> => await apiPrivate.get(`/Method/get-paging?pageNumber=${pageNumber}&pageSize=${pageSize}`),
    updateStudyMethod: async (studyMethodId: string, updateDate: UpdateMethodDataType): Promise<null> => await apiPrivate.put(`/Method/update-by/${studyMethodId}`, updateDate),
    deleteStudyMethod: async (studyMethodId: string): Promise<null> => await apiPrivate.delete(`/Method/delete-by/${studyMethodId}`),

    createEvaluation: async(createdData: CreateEvaluation): Promise<null> => await apiPrivate.post('/Evaluation/create', createdData),
    getListEvaluation: async(pageNumber:number, pageSize: number, name?:string): Promise<ResponseStructure<PaginationResponse<EvaluationDataType>>> => await apiPrivate.get(`/Evaluation/get-paging?pageNumber=${pageNumber}&pageSize=${pageSize}${name ? `&name=${name}` : ''}`),
    getEvaluationDetail: async(evaluationId: string): Promise<ResponseStructure<EvaluationDetailType>> => await apiPrivate.get(`/Evaluation/get-by/${evaluationId}`),
    updateEvaluationInfo: async(evaluationId: string, updatedData: UpdateEvaluation): Promise<null> => await apiPrivate.put(`/Evaluation/update-by/${evaluationId}`, updatedData),
    deleteEvaluation: async (evaluationId: string): Promise<null> => await apiPrivate.delete(`/Evaluation/delete-by/${evaluationId}`)
}