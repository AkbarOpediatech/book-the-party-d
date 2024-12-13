import { useState } from 'react'

interface PaginationConfig {
  initialPage?: number
  initialLimit?: number
}

const usePagination = ({ initialPage = 1, initialLimit = 10 }: PaginationConfig = {}) => {
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
