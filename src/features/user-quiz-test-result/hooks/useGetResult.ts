import { useEffect, useState } from 'react'
import type { ResultTestType } from '../types/result-test-type'
import { toast } from 'react-toastify'
import { QuizTestResultApi } from '../api/api.quiz.result'

export default function useGetResult({ resultId }: { resultId: string | undefined}) {
  const [result, setResult] = useState<ResultTestType>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getQuizResult = async () => {
      if (!resultId) {
       toast.error('Xảy ra lỗi. Kết quả bạn đã lưu hãy về trang quiz để xem.')
       return
      }
      try {
       setLoading(true)
       const response = await QuizTestResultApi.getQuizResult(resultId)
       setResult(response.data)
      } catch (error) {
        console.log(error)
        toast.error('Xảy ra lỗi trong quá trình nộp bài!')
      } finally {
        setLoading(false)
      }
    }
    getQuizResult()
  }, [resultId])
  return {
      result,
      loading
  }
}
