import usePagination from '@/hooks/pagination/usePagination'
import { createContext, useEffect, type PropsWithChildren } from 'react'
import useGetEvaluationData from '../hooks/useGetEvaluationData'
import type { PaginationResponse } from '@/types/data-response/response'
import type { EvaluationDataType } from '../types/evaluation-data-type'

type EvaluationContextProps = {
  currentPage: number
  goBackPage: () => void
  goToNextPage: () => void
  fetchEvaluationList: () => void
  totalPages: number
  loading: boolean
  evaluationList: PaginationResponse<EvaluationDataType> | undefined
}

const EvaluationContext = createContext<EvaluationContextProps| undefined>(undefined)

export function EvaluationProvider({ children }: PropsWithChildren) {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { evaluationList, loading, fetchEvaluationList } = useGetEvaluationData(currentPage)
  useEffect(() => {
      if (evaluationList) {
        setTotalPages(evaluationList.totalPages)
      }
  }, [evaluationList])
  return (
      <EvaluationContext.Provider value={{ currentPage, evaluationList, goToNextPage, goBackPage, loading, totalPages, fetchEvaluationList }}>
            {children}
      </EvaluationContext.Provider>
  )
}

export default EvaluationContext