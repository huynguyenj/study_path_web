import type { PaginationResponse, ResponseStructure } from '@/types/data-response/response'
import type { CreateMethodConsType, CreateMethodDataType, CreateMethodProType, MethodDataType, UpdateMethodDataType } from '../types/method-data-types'
import { apiPrivate } from '@/services/config/axios.config'

export const StudyMethodAdmin = {
    createStudyMethod: async (createdData: CreateMethodDataType): Promise<ResponseStructure<MethodDataType>> => await apiPrivate.post('/Method/create', createdData),
    createStudyMethodCon: async (createdData: CreateMethodConsType): Promise<null> => await apiPrivate.post('/MethodCon/create', createdData),
    createStudyMethodPro: async (createdData: CreateMethodProType): Promise<null> => await apiPrivate.post('/MethodPro/create', createdData),
    getAllStudyMethod: async (pageNumber: number, pageSize: number): Promise<ResponseStructure<PaginationResponse<MethodDataType>>> => await apiPrivate.get(`/Method/get-paging?pageNumber=${pageNumber}&pageSize=${pageSize}`),
    updateStudyMethod: async (studyMethodId: string, updateDate: UpdateMethodDataType): Promise<null> => await apiPrivate.put(`/Method/update-by/${studyMethodId}`, updateDate),
    deleteStudyMethod: async (studyMethodId: string): Promise<null> => await apiPrivate.delete(`/Method/delete-by/${studyMethodId}`)
      
}