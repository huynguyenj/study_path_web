import { useEffect, useState } from 'react'
import type { MethodDataType } from '../types/method-data-types'
import { StudyMethodAdmin } from '../api/api.study.method'
import type { PaginationResponse } from '@/types/data-response/response'
import { toast } from 'react-toastify'

export default function useGetMethodData(currentPage: number) {
  const [methodTableDatas, setMethodTableDatas] = useState<PaginationResponse<MethodDataType>>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchStudyMethod()
  }, [currentPage])
  const fetchStudyMethod = async() => {
    try {
      setLoading(true)
      const response = await StudyMethodAdmin.getAllStudyMethod(currentPage, 5)
      setMethodTableDatas(response.data)
      toast.success('Lấy danh sách phương pháp học thành công')
    } catch (error) {
      console.log(error)
      toast.error('Lấy danh sách phương pháp học thất bại')
    } finally {
      setLoading(false)
    }
  }
  return {
      methodTableDatas,
      loading
  }
}
