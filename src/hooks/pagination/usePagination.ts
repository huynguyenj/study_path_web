import { useState } from 'react'

type UsePaginationProps = {
      limit: number
}
export default function usePagination({ limit }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)

   const goToNextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage <= limit) {
      setCurrentPage(nextPage)

    }
  }
  const goBackPage = () => {
    const previousPage = currentPage - 1
    if (previousPage > 0 ) {
      setCurrentPage(previousPage)
    }
  }
  return {
      currentPage, limit, goToNextPage, goBackPage
  }
}
