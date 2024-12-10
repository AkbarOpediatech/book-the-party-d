import { useState } from 'react'

const usePagination = (initialPage: number = 1, initialLimit: number = 10) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [pageLimit, setPageLimit] = useState<number>(initialLimit)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit)
  }

  return {
    currentPage,
    pageLimit,
    handlePageChange,
    handlePageLimitChange
  }
}

export default usePagination
