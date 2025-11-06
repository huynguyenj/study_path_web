import { useEffect, useState } from 'react'
import type { QuestionSectionType } from '../types/question-type'
import { StudyMethodApi } from '../api/api.study.method'

export default function useGetEvaluationSections() {
  const [loading, setLoading] = useState(false)
  const [evaluationList, setEvaluationList] = useState<QuestionSectionType[]>([])
  useEffect(() => {
    fetchEvaluationList()
  }, [])
   const fetchEvaluationList = async () => {
      try {
        setLoading(true)
        const response = await StudyMethodApi.getAllEvaluation()
        setEvaluationList(response.data)    
      } catch (error) {
        console.log(error)    
      } finally {
        setLoading(false)
      }
    }
  return {
      loading,
      evaluationList,
      fetchEvaluationList
  }
}