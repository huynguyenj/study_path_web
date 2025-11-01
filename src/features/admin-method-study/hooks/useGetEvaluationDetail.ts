import { useState } from 'react'
import type { EvaluationDetailType, UpdateEvaluation } from '../types/evaluation-data-type'
import { toast } from 'react-toastify'
import { StudyMethodAdmin } from '../api/api.study.method'
import useEvaluationContext from './useEvaluationContext'

export default function useGetAdminEvaluationDetail() {
  const [evaluationDetail, setEvaluationDetail] = useState<EvaluationDetailType>()
  const [loading, setLoading] = useState(false)
  const context = useEvaluationContext()
  const fetchEvaluationDetail = async (evaluationId: string) => {
    try {
      setLoading(true)
      const response = await StudyMethodAdmin.getEvaluationDetail(evaluationId)
      setEvaluationDetail(response.data)
    } catch (error) {
      console.log(error)
      toast.error('Lấy thông tin đánh giá thất bại')
    } finally {
      setLoading(false)
    }
  }

  const updateEvaluation = async (evaluationId: string, updatedData: UpdateEvaluation) => {
     try {
      setLoading(true)
      await StudyMethodAdmin.updateEvaluationInfo(evaluationId, updatedData)
      toast.success('Cập nhật thông tin đánh giá thành công')
      context.fetchEvaluationList()
    } catch (error) {
      console.log(error)
      toast.error('Cập nhật thông tin đánh giá thất bại')
    } finally {
      setLoading(false)
    }
  }
  return {
      loading,
      evaluationDetail,
      fetchEvaluationDetail,
      updateEvaluation
  }
}
