import { useState } from 'react'


export default function usePagination() {
 const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


   const goToNextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage <= totalPages) {
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
      currentPage, totalPages, setTotalPages, goToNextPage, goBackPage
  }
}
