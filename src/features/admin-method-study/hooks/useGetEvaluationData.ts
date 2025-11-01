import { useEffect, useState } from 'react'
import type { EvaluationDataType } from '../types/evaluation-data-type'
import type { PaginationResponse } from '@/types/data-response/response'
import { StudyMethodAdmin } from '../api/api.study.method'

export default function useGetEvaluationData(currentPage: number) {
  const [evaluationList, setEvaluationList] = useState<PaginationResponse<EvaluationDataType>>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchEvaluationList()
  }, [currentPage])
  const fetchEvaluationList = async () => {
    try {
      setLoading(true)
      const response = await StudyMethodAdmin.getListEvaluation(currentPage, 5)
      setEvaluationList(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return {
      evaluationList,
      loading,
      fetchEvaluationList
  }
}