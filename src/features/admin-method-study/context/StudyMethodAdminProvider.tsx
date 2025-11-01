import { createContext, useEffect, type PropsWithChildren } from 'react'
import useGetMethodData from '../hooks/useGetMethodData'
import usePagination from '@/hooks/pagination/usePagination'
import type { PaginationResponse } from '@/types/data-response/response'
import type { MethodDataType } from '../types/method-data-types'

type StudyMethodAdminContextProps = {
  currentPage: number
  goBackPage: () => void
  goToNextPage: () => void
  totalPages: number
  loading: boolean
  methodTableDatas: PaginationResponse<MethodDataType> | undefined
}

const StudyMethodAdminContext = createContext<StudyMethodAdminContextProps | undefined>(undefined)

export function StudyMethodAdminProvider({ children }: PropsWithChildren) {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { loading, methodTableDatas } = useGetMethodData(currentPage)
  useEffect(() => {
      if (methodTableDatas) {
        setTotalPages(methodTableDatas.totalPages)
      }
  }, [])
  return (
      <StudyMethodAdminContext.Provider value={{ currentPage, goBackPage, goToNextPage, loading, methodTableDatas, totalPages }}>
            {children}
      </StudyMethodAdminContext.Provider>
  )
}

export default StudyMethodAdminContext