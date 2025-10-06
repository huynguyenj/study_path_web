import { useEffect, useState } from 'react'
import type { EvaluationDataType } from '../types/evaluation-data-type'
import { evaluationData } from '../evaluationData'

export default function useGetEvaluationData() {
  const [evaluationDataTable, setEvaluationDataTable] = useState<EvaluationDataType[]>([])
  useEffect(() => {
      setEvaluationDataTable(evaluationData)
  }, [])
  return {
      evaluationDataTable
  }
}